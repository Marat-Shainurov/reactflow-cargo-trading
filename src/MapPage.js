import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'reactflow/dist/style.css';
import React, { useEffect } from 'react';

function MapPage() {
  useEffect(() => {
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([55.755826, 37.6172999], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
    }
  }, []);

  return (
    <div id="map" style={{ height: '700px' }}></div>
  );
}

export default MapPage;
