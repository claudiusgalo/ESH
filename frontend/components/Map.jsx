'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const Map = ({ data, mapRef }) => {
	return (
		<MapContainer
			zoom={25}
			center={data[0].code}
			ref={mapRef}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{data.map((d) => {
				return (
					<Marker
						key={d.id}
						position={d.code}
						icon={L.divIcon({
							iconSize: [40, 40],
							iconAnchor: [38 / 2, 38 + 9],
							className: 'marker',
							html: '🚩',
						})}>
						<Popup>{d.title}</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};

export default Map;
