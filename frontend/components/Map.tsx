'use client';
import React, { useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import type * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import styles from './Map.module.css';

type LatLngTuple = [number, number];

type Item = {
  id: string | number;
  title: string;
  code?: LatLngTuple; // support either shape
  coordinates?: LatLngTuple; // support either shape
  status?: 'sale' | 'pending' | 'sold'; // <-- add this
};

type Props = {
  data: Item[];
  mapRef?: React.Ref<Leaflet.Map>;
  height?: number | string; // e.g. 420 | '50vh'
  tileUrl?: string; // optional override
  tileAttribution?: string; // optional override
};

const defaultOSMUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const defaultOSMAttr = '&copy; OpenStreetMap contributors';

const FitToMarkers: React.FC<{ points: LatLngTuple[] }> = ({ points }) => {
  const map = useMap();
  React.useEffect(() => {
    if (!points.length) return;
    if (points.length === 1) {
      map.setView(points[0], Math.min(map.getMaxZoom(), 15), {
        animate: false,
      });
    } else {
      const bounds = Leaflet.latLngBounds(points);
      map.fitBounds(bounds, {
        padding: [24, 24],
        maxZoom: Math.min(map.getMaxZoom(), 17),
      });
    }
    setTimeout(() => map.invalidateSize(), 0);
  }, [points, map]);
  return null;
};

/** ---- Zoom-scaled marker helpers ---- */
function sizeForZoom(
  zoom: number,
  baseZoom = 13,
  basePx = 22,
  growth = 1.12,
  minPx = 14,
  maxPx = 46
) {
  const px = Math.round(basePx * Math.pow(growth, zoom - baseZoom));
  return Math.max(minPx, Math.min(maxPx, px));
}

const colorForStatus = (status?: Item['status']) => {
  switch (status) {
    case 'pending':
      return '#f59e0b'; // orange-500
    case 'sold':
      return '#dc2626'; // red-600
    case 'sale':
    default:
      return '#16a34a'; // green-600
  }
};

/** Small SVG pin that fills its container; tip is at bottom-center */
const pinSVG = (colorHex: string) => `
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 1.5c-4.14 0-7.5 3.36-7.5 7.5 0 5.06 6.12 12.41 7.16 13.58.21.24.58.24.79 0C13.5 21.41 19.5 14.06 19.5 9c0-4.14-3.36-7.5-7.5-7.5Z"
    fill="${colorHex}"
    stroke="rgba(0,0,0,.25)"
    stroke-width="1"
  />
  <circle cx="12" cy="9" r="3.05" fill="#fff" opacity=".95"/>
</svg>
`;

function makeScaledIcon(px: number, colorHex: string): L.DivIcon {
  return Leaflet.divIcon({
    iconSize: [px, px],
    iconAnchor: [px / 2, px], // bottom-center tip on the coordinate
    className: styles?.zoomPin ?? 'zoom-pin', // still apply CSS module class if present
    html: `<div class="${styles?.zoomPinInner ?? 'zoom-pin__inner'}">${pinSVG(
      colorHex
    )}</div>`,
  });
}

type ZoomScaledMarkerProps = {
  position: LatLngTuple;
  title?: string;
  status?: Item['status'];
  baseZoom?: number;
  basePx?: number;
  growth?: number;
  minPx?: number;
  maxPx?: number;
};

const ZoomScaledMarker: React.FC<ZoomScaledMarkerProps> = ({
  position,
  title,
  status,
  baseZoom = 13,
  basePx = 22,
  growth = 1.12,
  minPx = 14,
  maxPx = 46,
}) => {
  const [zoom, setZoom] = React.useState<number | null>(null);
  const map = useMapEvents({
    zoom: (e) => setZoom(e.target.getZoom()),
    zoomend: (e) => setZoom(e.target.getZoom()),
  });
  React.useEffect(() => {
    if (zoom == null) setZoom(map.getZoom());
  }, [map, zoom]);

  const px = sizeForZoom(
    zoom ?? baseZoom,
    baseZoom,
    basePx,
    growth,
    minPx,
    maxPx
  );
  const color = colorForStatus(status);
  const icon = React.useMemo(() => makeScaledIcon(px, color), [px, color]);

  return (
    <Marker
      position={position}
      icon={icon}
    >
      {title ? <Popup>{title}</Popup> : null}
    </Marker>
  );
};

/** ---- Map component ---- */
const Map: React.FC<Props> = ({
  data,
  mapRef,
  height = 420,
  tileUrl,
  tileAttribution,
}) => {
  const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  const providerUrl =
    tileUrl ??
    (MAPTILER_KEY
      ? `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`
      : defaultOSMUrl);

  const providerAttr =
    tileAttribution ??
    (MAPTILER_KEY
      ? '© MapTiler © OpenStreetMap contributors'
      : defaultOSMAttr);

  const points = useMemo<LatLngTuple[]>(
    () =>
      (data ?? [])
        .map((d) => d.coordinates ?? d.code)
        .filter((p): p is LatLngTuple => Array.isArray(p) && p.length === 2),
    [data]
  );

  const center = useMemo<LatLngTuple>(
    () => points[0] ?? [39.1857, -78.1633],
    [points]
  );

  return (
    <div
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: '100%',
      }}
    >
      <MapContainer
        center={center}
        zoom={13}
        minZoom={3}
        maxZoom={19}
        scrollWheelZoom
        ref={mapRef as any}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url={providerUrl}
          attribution={providerAttr}
          maxZoom={19}
        />
        <FitToMarkers points={points} />

        {data.map((d) => {
          const pos = (d.coordinates ?? d.code) as LatLngTuple | undefined;
          if (!pos) return null;
          return (
            <ZoomScaledMarker
              key={d.id}
              position={pos}
              title={d.title}
              status={d.status} // <-- drives color
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
