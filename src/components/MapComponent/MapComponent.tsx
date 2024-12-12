import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import Slider from 'react-slick';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/Popup.css';
import '../../styles/Sidebar.css'; // Custom styles for the sidebar
import '../../styles/MarkerAnimation.css';
import { markers } from '../../data/Markers';

const NYC_POSITION: L.LatLngExpression = [40.7438, -74.0060];
const NYC_BOUNDS: L.LatLngBoundsLiteral = [
    [40.515390956419395, -74.08784354303535],
    [40.98203035591099, -73.67279818020539],
];

// Define a type for the marker object
interface MarkerData {
    title: string;
    images: string[];
    location: string;
    description: string;
    artists: string;
    years: string;
    impact: string;
    position: [number, number];
}

const InitializeMap: React.FC<{ mapRef: React.MutableRefObject<L.Map | null> }> = ({ mapRef }) => {
    const map = useMap();
    useEffect(() => {
        if (map) {
            mapRef.current = map;
        }
    }, [map, mapRef]);

    return null;
};

const MapComponent: React.FC = () => {
    const mapRef = useRef<L.Map | null>(null);

    // State to store the index of the selected marker
    const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

    // Create a custom icon for active and inactive markers
    const createCustomIcon = (isActive: boolean) =>
        L.divIcon({
            className: `custom-marker ${isActive ? 'active' : ''}`,
            html: `<div class="icon-inner"></div>`,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50],
        });

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderMedia = (mediaUrl: string) => {
        const fileExtension = mediaUrl.split('.').pop()?.toLowerCase();
        if (['mp4', 'webm', 'ogg'].includes(fileExtension || '')) {
            return (
                <video controls style={{ maxWidth: '350px', maxHeight: '350px', objectFit: 'contain' }}>
                    <source src={mediaUrl} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            );
        }
        return (
            <img
                src={mediaUrl}
                alt="Media content"
                style={{ maxWidth: '350px', maxHeight: '350px', objectFit: 'contain' }}
            />
        );
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar */}
            <div className="sidebar">
                {selectedMarker ? (
                    <div className="sidebar-content">
                        <h2 className="venue-name">{selectedMarker.title}</h2>
                        <Slider {...sliderSettings}>
                            {selectedMarker.images.map((mediaUrl, idx) => (
                                <div key={idx}>{renderMedia(mediaUrl)}</div>
                            ))}
                        </Slider>
                        <p><strong>Location:</strong> {selectedMarker.location}</p>
                        <div className="scrollable-description">{selectedMarker.description}</div>
                    </div>
                ) : (
                    <p>Select a marker to see details</p>
                )}
            </div>

            {/* Map */}
            <div style={{ flex: 1 }}>
                <MapContainer
                    center={NYC_POSITION}
                    zoom={11}
                    style={{ height: '100%', width: '100%' }}
                    maxBounds={NYC_BOUNDS}
                    maxBoundsViscosity={1.0}
                    minZoom={10}
                    maxZoom={18}
                >
                    <InitializeMap mapRef={mapRef} />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            icon={createCustomIcon(
                                selectedMarker ? marker.position[0] === selectedMarker.position[0] && marker.position[1] === selectedMarker.position[1] : false
                            )}
                            eventHandlers={{
                                click: () => {
                                    if (mapRef.current) {
                                        mapRef.current.setView(marker.position, 16, { animate: true });
                                    }
                                    setSelectedMarker(marker); // Update the sidebar content
                                },
                            }}
                        />
                    ))}


                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
