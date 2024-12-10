import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const NYC_POSITION: L.LatLngExpression = [40.7128, -74.0060];

// Define the bounding box for NYC as LatLngBoundsLiteral
const NYC_BOUNDS: L.LatLngBoundsLiteral = [
    [40.515390956419395, -74.08784354303535], // South-west corner (Lower Manhattan)
    [40.98203035591099, -73.67279818020539], // North-east corner (Inwood, upper Manhattan)
];

const MapComponent: React.FC = () => {
    return (
        <div style={{ height: '100vh' }}>
            <MapContainer
                center={NYC_POSITION}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                maxBounds={NYC_BOUNDS}  // Restrict panning to NYC area
                maxBoundsViscosity={1.0} // Helps to keep the map locked within bounds
                minZoom={11}  // Optionally set min zoom level
                maxZoom={18}  // Optionally set max zoom level
            >
                {/* Using OpenStreetMap tiles as the default layer */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[40.73061, -73.935242]}>
                    <Popup>
                        <a href="/venue-details">Venue Details</a>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
