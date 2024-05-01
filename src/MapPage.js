import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect } from 'react';
import contractData from './contract_data_1.json';


function MapPage() {
  useEffect(() => {
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([55.755826, 37.6172999], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const seller = L.marker([contractData.participants.seller.lat, contractData.participants.seller.lon]).addTo(map);
      seller.bindPopup(`<br>Поставщик</br> ${contractData.participants.seller.name} <b>.`).openPopup();      
      
      const buyer = L.marker([contractData.participants.buyer.lat, contractData.participants.buyer.lon]).addTo(map);
      buyer.bindPopup(`<br>Покупатель</br> ${contractData.participants.buyer.name} <b>.`).openPopup();
      
      const logistsic = L.marker([contractData.participants.logistics[0].lat, contractData.participants.logistics[0].lon]).addTo(map);
      logistsic.bindPopup(`<br>Перевозчик</br> ${contractData.participants.logistics[0].name} <b>.`).openPopup();
      
      const lab = L.marker([contractData.participants.lab.lat, contractData.participants.lab.lon]).addTo(map);
      lab.bindPopup(`<br>Лаборатория</br> ${contractData.participants.lab.name} <b>.`).openPopup();
    }
  }, []);

  return (
    <div id="map" style={{ height: '700px' }}>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""/>

     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>
    </div>
  );
}

export default MapPage;
