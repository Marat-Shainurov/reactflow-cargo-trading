import L from 'leaflet';
import contractData from '../contract_data_1.json';


export const customIconBuyer = L.divIcon({
  className: 'custom-buyer-icon',
  html: `
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
`,      
  iconSize: [500, 100], // Adjust icon size to fit the content
  iconAnchor: [180, 57], // Adjust icon anchor
  popupAnchor: [0, -32] // Popup anchor relative to the icon
});

export const buyerIconStyles = `
.custom-buyer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.external-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-container-buyer {
  display: flex;
  align-items: center;
}

.participant-buyer {
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

.block-buyer {
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

.incomming-wallet-buyer {
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

.outcomming-wallet-buyer {
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
