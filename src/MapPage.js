import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect } from 'react';
import contractData from './contract_data_1.json';
import { customIconSeller, sellerIconStyles } from './custom-icons/custom-icon-seller';
import { customIconLab, labIconStyles } from './custom-icons/custom-icon-lab';
import { customIconBuyer, buyerIconStyles } from './custom-icons/custom-icon-buyer';
import { customIconLogistics, logisticsIconStyles } from './custom-icons/custom-icon-logistics';


function MapPage() {
  useEffect(() => {
    if (!document.getElementById('map')._leaflet_id) {
      const map = L.map('map').setView([55.755826, 37.6172999], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Inject the CSS styles into the document
      const markerIconStyleElement = document.createElement('style');
      markerIconStyleElement.innerHTML = labIconStyles + sellerIconStyles + buyerIconStyles + logisticsIconStyles;
      document.head.appendChild(markerIconStyleElement);

      const seller = L.marker([contractData.participants.seller.lat, contractData.participants.seller.lon], { icon: customIconSeller }).addTo(map);

      const buyer = L.marker([contractData.participants.buyer.lat, contractData.participants.buyer.lon], { icon: customIconBuyer }).addTo(map);
      
      const logistsic = L.marker([contractData.participants.logistics[0].lat, contractData.participants.logistics[0].lon], { icon: customIconLogistics }).addTo(map);
      
      const lab = L.marker([contractData.participants.lab.lat, contractData.participants.lab.lon], { icon: customIconLab }).addTo(map);

      const sellerCoords = [contractData.participants.seller.lat, contractData.participants.seller.lon];
      const buyerCoords = [contractData.participants.buyer.lat, contractData.participants.buyer.lon];
      const polyline = L.polyline([sellerCoords, buyerCoords], { color: 'blue' }).addTo(map);
    }
  }, []);

  return (
    <div id="map" style={{ height: '690px' }}>
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