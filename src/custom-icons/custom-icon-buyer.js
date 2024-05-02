import L from 'leaflet';
import contractData from '../contract_data_1.json';


export const customIconBuyer = L.divIcon({
  className: 'custom-buyer-icon',
  html: `
  <div class="marker-container">
    <div class="incomming-wallet">
      ${contractData.wallets.uploading_wallet.amount}
    </div>
    <div  class="block">
      <div>${contractData.participants.buyer.type}:</div>
      <div><b>${contractData.participants.buyer.name}</b></div>
    </div>
  </div>
`,      
  iconSize: [350, 100], // Adjust icon size to fit the content
  iconAnchor: [50, 25], // Adjust icon anchor
  popupAnchor: [0, -32] // Popup anchor relative to the icon
});

export const buyerIconStyles = `
.custom-buyer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.marker-container {
  display: flex;
  align-items: center;
}

.block {
  width: 100px;
  height: 50px;
  background-color: #D8BFD8;
  border: 1px solid black;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 5px;
}

.incomming-wallet {
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
`;