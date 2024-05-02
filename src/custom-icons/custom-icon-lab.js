import L from 'leaflet';
import contractData from '../contract_data_1.json';


// Define custom marker icon using HTML and CSS
export const customIconLab = L.divIcon({
  className: 'custom-lab-icon',
  html: `
  <div class="external-container">
    <div class="marker-container-lab">
      <div class="incomming-wallet-lab">
        ${contractData.wallets.volume_confirmed.amount}
      </div>
      <div class="block-lab">
        <div><b>${contractData.functional_blocs.quality_control.name}</b></div>
      </div>
      <div class="outcomming-wallet-lab">
        ${contractData.wallets.quality_control_wallet.amount}
      </div>
    </div>
    <div class="marker-container-lab">
      <div class="participant-lab">
        <div>${contractData.participants.lab.type}:</div>
        <div><b>${contractData.participants.lab.name}</b></div>
      </div>
    </div>
  </div>
`,      
  iconSize: [500, 100], // Adjust icon size to fit the content
  iconAnchor: [180, 57], // Adjust icon anchor
  popupAnchor: [0, -32] // Popup anchor relative to the icon
});

export const labIconStyles = `
.custom-lab-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.external-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-container-lab {
  display: flex;
  align-items: center;
}

.participant-lab {
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
  margin-top: 10px;
}

.block-lab {
  width: 150px;
  height: 40px;
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

.incomming-wallet-lab {
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

.outcomming-wallet-lab {
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