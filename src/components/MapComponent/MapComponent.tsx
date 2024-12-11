import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Slider from 'react-slick';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/Popup.css'

// Import custom marker icons
import customShadowUrl from 'leaflet/dist/images/marker-shadow.png'; // Optional: Leaflet default shadow

// Import the markers data
import { markers } from '../../data/Markers';

// Define a custom Leaflet icon
const customIcon = L.icon({
    iconUrl: process.env.PUBLIC_URL + '/assets/music-icon.svg',
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
    // Slick settings for the carousel
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Function to render image or video
    const renderMedia = (mediaUrl: string) => {
        const fileExtension = mediaUrl.split('.').pop()?.toLowerCase();

        if (fileExtension === 'mp4' || fileExtension === 'webm' || fileExtension === 'ogg') {
            return (
                <video
                    controls
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                >
                    <source src={mediaUrl} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            );
        }

        return (
            <img
                src={mediaUrl}
                alt="Media content"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}
            />
        );
    };

    return (
        <div style={{ height: '100vh' }}>
            <MapContainer
                center={NYC_POSITION}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                maxBounds={NYC_BOUNDS}
                maxBoundsViscosity={1.0}
                minZoom={11}
                maxZoom={18}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.position} icon={customIcon}>
                        <Popup>
                            <div className="popup-content">
                                {/* Carousel / Image Scroll using react-slick */}
                                <Slider {...sliderSettings}>
                                    {marker.images.map((mediaUrl, idx) => (
                                        <div key={idx}>
                                            {renderMedia(mediaUrl)}
                                        </div>
                                    ))}
                                </Slider>

                                <h3>{marker.title}</h3>
                                <p><strong>Location:</strong> {marker.location}</p>

                                <div className='scrollable-description'>
                                    {marker.description}
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
