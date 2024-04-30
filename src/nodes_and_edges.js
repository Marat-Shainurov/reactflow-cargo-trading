import { Position } from 'reactflow';
import contractData from './contract_data_1.json';

const walletNodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
  style: {
    borderRadius: '100%',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98FB98',
    fontWeight: 'bold'
  },
};

const initialNodes = [
  {
    id: "1",
    data: {label: contractData.wallets.declared.amount},
    position: {x: 0, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "2",
    type: 'blockNode',
    data: {label: "Проверка качества"},
    position: {x: 100, y: 100},
    },
  {
    id: "3",
    data: {label: contractData.wallets.quality_control_wallet.amount},
    position: {x: 350, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "4",
    type: "blockNode",
    data: {label: "Погрузка"},
    position: {x: 500, y: 100},
  },
  {
    id: "5",
    data: {label: contractData.wallets.uploading_wallet.amount},
    position: {x: 750, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "6",
    type: "blockNode",
    data: {label: "Разгрузка"},
    position: {x: 900, y: 100}
  },
  {
    id: "7",
    data: {label: contractData.wallets.unloading_wallet.amount},
    position: {x: 1100, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "8",
    data: {label: "Регулятор"},
    position: {x: 145, y: -99},
    type: 'reg',
    targetPosition: 'bottom',
    style: {
      backgroundColor: '#D8BFD8',
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  {
    id: "9",
    data: {label: contractData.participants.lab.name},
    type: 'lab',
    sourcePosition: 'top',
    position: {x: 145, y: 358},
    style: {
      backgroundColor: '#D8BFD8',
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  {
    id: "10",
    data: {label: contractData.participants.seller.name},
    position: {x: 430, y: 358},
    type: 'seller',
    sourcePosition: 'top',
    style: {
      backgroundColor: '#D8BFD8',
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  {
    id: "15",
    data: {label: contractData.participants.logistics[0].name},
    position: {x: 750, y: 358},
    type: 'logistic',
    sourcePosition: 'top',
    style: {
      backgroundColor: '#D8BFD8',
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  {
    id: "11",
    data: {label: contractData.participants.buyer.name},
    position: {x: 1100, y: 358},
    type: 'buyer',
    sourcePosition: 'top',
    style: {
      backgroundColor: '#D8BFD8',
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    }
  },
  {
    id: "12",
    data: { docs_count: contractData.documents.quality_control_docs.docs_count },
    position: {x: 135, y: 195},
    type: "docNode",
  },
  {
    id: "13",
    data: { docs_count: contractData.documents.quality_control_docs.docs_count },
    position: {x: 420, y: 195},
    type: "docNode",
  },
  {
    id: "14",
    data: { docs_count: contractData.documents.quality_control_docs.docs_count },
    position: {x: 655, y: 195},
    type: "docNode",
  },
  {
    id: "16",
    data: { docs_count: contractData.documents.quality_control_docs.docs_count },
    position: {x: 825, y: 195},
    type: "docNode",
  },
  {
    id: "17",
    data: { docs_count: contractData.documents.quality_control_docs.docs_count },
    position: {x: 1000, y: 195},
    type: "docNode"
  },
  {
    id: "18",
    data: {label: "Механизмы"},
    position: {x: -25, y: -137.5},
    type: "mechanismsNode"
  },
  {
    id: "19",
    data: {label: "Участники"},
    position: {x: -25, y: 410},
    type: "mechanismsNode"
  },
  {
    id: "20",
    data: {label: "Вход"},
    position: {x: -120, y: -41.5},
    type: "inputNode"
  },
  {
    id: "21",
    data: {label: "Выход"},
    position: {x: 1250, y: -41.5},
    type: "outputNode"
  }
];


const initialEdges = [
  {
    id: "1-2a",
    source: "1", 
    target: "2", 
    targetHandle: "a",
    animated: true
  },
  {
    id: "8-2",
    source: "8", 
    target: "2", 
    targetHandle: "b",
    animated: true
  },
  {
    id: "12-2",
    source: "12", 
    target: "2", 
    targetHandle: "c",
    animated: true
  },
  {
    id: "2-3",
    source: "2", 
    target: "3", 
    animated: true
  },
  {
    id: "3-4",
    source: "3", 
    target: "4", 
    animated: true
  },
  {
    id: "4-5",
    source: "4", 
    target: "5", 
    animated: true
  },
  {
    id: "13-4",
    source: "13", 
    target: "4", 
    targetHandle: "c",
    animated: true
  },
  {
    id: "14-4",
    source: "14", 
    target: "4", 
    targetHandle: "c",
    animated: true
  },
  {
    id: "5-6",
    source: "5", 
    target: "6", 
    animated: true
  },
  {
    id: "6-7",
    source: "6", 
    target: "7", 
    animated: true
  },
  {
    id: "16-6",
    source: "16", 
    target: "6", 
    targetHandle: "c",
    animated: true
  },
  {
    id: "17-6",
    source: "17", 
    target: "6", 
    targetHandle: "c",
    animated: true
  },
  {
    id: "9-12",
    source: "9", 
    target: "12", 
    animated: true
  },
  {
    id: "10-13",
    source: "10", 
    target: "13", 
    animated: true
  },
  {
    id: "15-14",
    source: "15", 
    target: "14", 
    animated: true
  },
  {
    id: "15-16",
    source: "15", 
    target: "16", 
    animated: true
  },
  {
    id: "11-17",
    source: "11", 
    target: "17", 
    animated: true
  },
  {
    id: "20-1",
    source: "20", 
    target: "1", 
    animated: true
  },
  {
    id: "7-21",
    source: "7", 
    target: "21", 
    animated: true
  }
]

export { initialEdges, initialNodes };