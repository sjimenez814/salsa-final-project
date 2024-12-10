import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import custom marker icons
import customIconUrl from '../../assets/music-icon.svg'; // Replace with the path to your custom icon
import customShadowUrl from 'leaflet/dist/images/marker-shadow.png'; // Optional: Leaflet default shadow

// Define a custom Leaflet icon
const customIcon = L.icon({
    iconUrl: customIconUrl,
    shadowUrl: customShadowUrl,
    iconSize: [35, 35], // Size of the icon
    iconAnchor: [12, 41], // Anchor point of the icon
    popupAnchor: [1, -34], // Popup position relative to the icon
});

const NYC_POSITION: L.LatLngExpression = [40.7128, -74.0060];

// Define the bounding box for NYC as LatLngBoundsLiteral
const NYC_BOUNDS: L.LatLngBoundsLiteral = [
    [40.515390956419395, -74.08784354303535], // South-west corner (Lower Manhattan)
    [40.98203035591099, -73.67279818020539], // North-east corner (Inwood, upper Manhattan)
];

const MapComponent: React.FC = () => {
    // Hardcoded list of markers with LatLngTuple for position
    const markers = [
        {
            position: [40.73061, -73.935242] as [number, number], // Ensure position is typed correctly
            title: 'Venue 1',
            location: 'Brooklyn, NY',
            description: 'A nice venue with great music!',
            imageUrl: 'https://via.placeholder.com/100', // Replace with a real image URL
        },
        {
            position: [40.7527, -73.9772] as [number, number], // Ensure position is typed correctly
            title: 'Venue 2',
            location: 'Manhattan, NY',
            description: 'Another awesome venue with live performances.',
            imageUrl: 'https://via.placeholder.com/100', // Replace with a real image URL
        },
        // Add more markers here...
    ];

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
                {/* Render all markers from the hardcoded array */}
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={customIcon}>
                        <Popup>
                            <div className="popup-content">
                                {/* Photo Section */}
                                <img
                                    src={marker.imageUrl} // Use image URL from marker data
                                    alt="Venue"
                                    style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                                />

                                {/* Title */}
                                <h3>{marker.title}</h3>

                                {/* Location */}
                                <p><strong>Location:</strong> {marker.location}</p>

                                {/* Description / Text Information */}
                                <p>{marker.description}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
