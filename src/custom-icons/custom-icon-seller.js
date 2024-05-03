import L from 'leaflet';
import contractData from '../contract_data_1.json';

// Define custom marker icon using HTML and CSS
export const customIconSeller = L.divIcon({
  className: 'custom-seller-icon',
  html: `
  <div class="external-container">
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
`,   
  iconSize: [500, 150], // Adjust icon size to fit the content
  iconAnchor: [180, 57], // Adjust icon anchor
  popupAnchor: [0, 0] // Popup anchor relative to the icon
});

export const sellerIconStyles = `
.custom-seller-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container-buyer {
  display: flex;
  align-items: center;
}

.popup-block-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dotted-line {
  width: 100%;
  height: 1px;
  background-color: white;
  border-top: 3.5px dashed grey;
  margin: 35px; 
}

.external-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-container-seller {
  display: flex;
  align-items: center;
}

.participant-seller {
  width: 120px;
  height: 60px;
  background-color: #D8BFD8;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
}

.block-seller {
  width: 140px;
  height: 35px;
  background-color: #87CEFA;
  border: 1px solid black;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5px;
}

.incomming-wallet-seller {
  border-radius: 50%;
  background-color: #98FB98;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-right: 5px;
}

.outcomming-wallet-seller {
  border-radius: 50%;
  background-color: #98FB98;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-left: 7.5px; 
}
`;
