import React from 'react';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Optional, for styling
import MapComponent from './MapComponent'; // Import MapComponent

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>Interactive Map of NYC</h1>  {/* Title for the page */}
        <MapComponent />  {/* Render the MapComponent */}
      </div>
  );
}

export default App;
