import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Slider from 'react-slick';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/Popup.css';
import { markers } from '../../data/Markers';

const NYC_POSITION: L.LatLngExpression = [40.7128, -74.0060];
const NYC_BOUNDS: L.LatLngBoundsLiteral = [
    [40.515390956419395, -74.08784354303535],
    [40.98203035591099, -73.67279818020539],
];

const customIcon = L.icon({
    iconUrl: process.env.PUBLIC_URL + '/assets/jamaica.png',
    shadowUrl: 'leaflet/dist/images/marker-shadow.png',
    iconSize: [45, 45],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// Custom hook to get and store the map instance
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
                <video controls style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}>
                    <source src={mediaUrl} type={`video/${fileExtension}`} />
                    Your browser does not support the video tag.
                </video>
            );
        }
        return (
            <img
                src={mediaUrl}
                alt="Media content"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
        );
    };

    return (
        <div style={{ height: '100vh' }}>
            <MapContainer
                center={NYC_POSITION}
                zoom={10}
                style={{ height: '100%', width: '100%' }}
                maxBounds={NYC_BOUNDS}
                maxBoundsViscosity={1.0}
                minZoom={10}
                maxZoom={18}
            >

                {/* Initialize the map and store it in mapRef */}
                <InitializeMap mapRef={mapRef} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => {
                                if (mapRef.current) {
                                    mapRef.current.setView(marker.position, 15, { animate: true });
                                }
                            },
                        }}
                    >
                        <Popup>
                            <div className="popup-content">
                                <Slider {...sliderSettings}>
                                    {marker.images.map((mediaUrl, idx) => (
                                        <div key={idx}>{renderMedia(mediaUrl)}</div>
                                    ))}
                                </Slider>
                                <h3>{marker.title}</h3>
                                <p><strong>Location:</strong> {marker.location}</p>
                                <div className="scrollable-description">{marker.description}</div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    );
};

export default MapComponent;
