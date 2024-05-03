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
      const map = L.map('map').setView([56.756503, 60.604832], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Inject the CSS styles into the document
      const markerIconStyleElement = document.createElement('style');
      markerIconStyleElement.innerHTML = sellerIconStyles + labIconStyles + buyerIconStyles + logisticsIconStyles;
      document.head.appendChild(markerIconStyleElement);

      const seller = L.marker([contractData.participants.seller.lat, contractData.participants.seller.lon]).addTo(map);
      const buyer = L.marker([contractData.participants.buyer.lat, contractData.participants.buyer.lon]).addTo(map);

      buyer.bindPopup(`
      <div class="external-container">
        <div class="marker-container-buyer">
          <div class="incomming-wallet-buyer">
            ${contractData.wallets.uploading_wallet.amount}
          </div>
          <div class="block-buyer">
            <div><b>${contractData.functional_blocs.unloading.name}</b></div>
          </div>
        </div>
        <div class="marker-container-buyer">
          <div class="participant-buyer">
            <div>${contractData.participants.buyer.type}:</div>
            <div><b>${contractData.participants.buyer.name}</b></div>
          </div>
        </div>
      </div>
    `, {autoClose:false}, {maxWidth: "auto"}).openPopup();

    
      seller.bindPopup(`
      <div class="popup-container-buyer">
        <div class="popup-block-container">
          <div class="marker-container-seller">
            <div class="incomming-wallet-seller">
              ${contractData.wallets.declared.amount}
            </div>
            <div class="block-seller">
              <div><b>${contractData.functional_blocs.volume_confirmation.name}</b></div>
            </div>
          </div>
          <div class="marker-container-seller">
            <div class="participant-seller">
              <div>${contractData.participants.seller.type}:</div>
              <div><b>${contractData.participants.seller.name}</b></div>
            </div>
          </div>
        </div>

        <div class="popup-block-container">
          <div class="marker-container-lab">
            <div class="incomming-wallet-lab">
              ${contractData.wallets.volume_confirmed.amount}
            </div>
            <div class="block-lab">
              <div><b>${contractData.functional_blocs.quality_control.name}</b></div>
            </div>
          </div>
          <div class="marker-container-lab">
            <div class="participant-lab">
              <div>${contractData.participants.lab.type}:</div>
              <div><b>${contractData.participants.lab.name}</b></div>
            </div>
          </div>
        </div>

        <div class="popup-block-container">
          <div class="marker-container-seller">
            <div class="incomming-wallet-seller">
              ${contractData.wallets.quality_control_wallet.amount}
            </div>
            <div class="block-seller">
              <div><b>${contractData.functional_blocs.uploading.name}</b></div>
            </div>
          </div>
          <div class="marker-container-seller">
            <div class="participant-seller">
              <div>${contractData.participants.logistics[0].type}:</div>
              <div><b>${contractData.participants.logistics[0].name}</b></div>
            </div>
          </div>
        </div>
    </div>
    `, { autoClose : false, maxWidth: "auto" }).openPopup();
      
      const sellerCoords = [contractData.participants.seller.lat, contractData.participants.seller.lon];
      const buyerCoords = [contractData.participants.buyer.lat, contractData.participants.buyer.lon];
      L.polyline([sellerCoords, buyerCoords], { color: 'grey', dashArray: '5, 5'  }).addTo(map);
    }
  }, []);

  return (
    <div id="map" style={{ height: '600px' }}>
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