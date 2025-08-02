{
  description = "Next.js 13 frontend (TypeScript, Tailwind, GraphQL Codegen)";

  #############################################
  # 1. Inputs
  #############################################
  inputs = {
    nixpkgs     .url = "github:NixOS/nixpkgs/nixos-24.05";
    flake-utils .url = "github:numtide/flake-utils";
  };

  #############################################
  # 2. Outputs
  #############################################
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = { allowUnfree = true; };  # allows VS Code, fonts, etc. if added later
        };

        nodejs = pkgs.nodejs_20;   # Next 13 is happy on ≥16.8 — pin to LTS 20
        npm    = pkgs.nodePackages.npm;
      in {

        ###############################################################
        # 2.a  Reproducible *build*  →  `nix build .#frontend`
        ###############################################################
        packages.frontend = pkgs.stdenv.mkDerivation {
          pname   = "frontend";
          version = "1.0.0";
          src     = ./.;

          # tools needed during the build
          buildInputs = [
            nodejs
            npm
          ];

          # environment variable so Next keeps telemetry off and
          # treats build as production.
          NPM_CONFIG_UPDATE_NOTIFIER = "false";
          NEXT_TELEMETRY_DISABLED    = "1";

          installPhase = ''
            runHook preInstall
            mkdir -p $out/work
            cp -r . $out/work
            cd $out/work

            # deterministic install from package-lock.json
            npm ci --ignore-scripts

            # optional: run GraphQL codegen before compiling React
            if [ -f codegen.ts ] || [ -f codegen.yml ]; then
              npx graphql-codegen
            fi

            # compile & optimise
            npm run build

            # copy the minimal runtime artefacts into $out
            mkdir -p $out/site
            cp -r .next public next.config.js package.json $out/site/

            # install prod dependencies only (slims closure)
            pushd $out/site
            npm ci --omit=dev --ignore-scripts
            popd
            runHook postInstall
          '';
        };

        ###############################################################
        # 2.b  Dev shell  →  `nix develop`
        ###############################################################
        devShells.default = pkgs.mkShell {
          buildInputs = [
            nodejs
            npm
            pkgs.typescript                 # tsc
            pkgs.nodePackages.tailwindcss
            pkgs.nodePackages.eslint
            pkgs.nodePackages.prettier
          ];

          shellHook = ''
            export NODE_ENV=development
            echo "🎨  Frontend dev shell ready → run  npm install"
	    echo "npm run dev"
          '';
        };

        ###############################################################
        # 2.c  App shortcut  →  `nix run`
        ###############################################################
        apps.default = flake-utils.lib.mkApp {
          drv     = self.packages.${system}.frontend;
          name    = "frontend";
          exePath = "/bin/sh";
          args    = [
            "-c"
            # start the compiled site in production mode
            "npm --prefix $0 start"
            "${self.packages.${system}.frontend}/site"
          ];
        };
      });
}

