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

/** --- Zoom-scaled marker helpers --- */
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

function makeScaledIcon(px: number, html = '📍'): L.DivIcon {
  return Leaflet.divIcon({
    iconSize: [px, px],
    iconAnchor: [px / 2, px], // bottom-center tip stays on the coordinate
    className: 'zoom-pin',
    html: `<div class="${styles['zoom-pin__inner']}">📍</div>`,
  });
}

type ZoomScaledMarkerProps = {
  position: LatLngTuple;
  title?: string;
  html?: string;
  baseZoom?: number;
  basePx?: number;
  growth?: number;
  minPx?: number;
  maxPx?: number;
};

const ZoomScaledMarker: React.FC<ZoomScaledMarkerProps> = ({
  position,
  title,
  html = '📍',
  baseZoom = 13,
  basePx = 22,
  growth = 1.12,
  minPx = 14,
  maxPx = 46,
}) => {
  // Track current zoom
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
  const icon = React.useMemo(() => makeScaledIcon(px, html), [px, html]);

  return (
    <Marker
      position={position}
      icon={icon}
    >
      {title ? <Popup>{title}</Popup> : null}
    </Marker>
  );
};

/** --- Map component --- */
const Map: React.FC<Props> = ({
  data,
  mapRef,
  height = 420,
  tileUrl,
  tileAttribution,
}) => {
  const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

  // Prefer MapTiler when key exists; fall back to OSM
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

  // Normalize your data: d.coordinates or d.code
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
              html="📍"
              baseZoom={13}
              basePx={22}
              growth={1.12}
              minPx={14}
              maxPx={46}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
