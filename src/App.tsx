import React from 'react';
import 'leaflet/dist/leaflet.css';
import './styles/App.css'; // Optional, for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppRoutes from "./routes/AppRoutes";


const App = () => {
    return (
        <div className="page-container">
            <header className="header-banner">
                The Reggae Route
            </header>
            <div className="map-container">
                <AppRoutes />
            </div>
        </div>
    );
};

export default App;
