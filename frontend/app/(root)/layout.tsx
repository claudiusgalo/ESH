import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elcy & Co. Realty',
  description:
    'Unlocking doors to your dreams. Invest in your tomorrow, your next chapter begins with us.',
  icons: {
    icon: '/Asset1.svg', // make sure logo.svg is in the /public folder
    shortcut: '/Asset1.svg',
    apple: '/Asset1.png', // optional fallback for iOS devices
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
