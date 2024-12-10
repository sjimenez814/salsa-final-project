import React from 'react';
import 'leaflet/dist/leaflet.css';
import './styles/App.css'; // Optional, for styling
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return <AppRoutes />;
}

export default App;
