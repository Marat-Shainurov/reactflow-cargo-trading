import { Position } from 'reactflow';

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
  },
};

const initialNodes = [
  {
    id: "1",
    data: {"label": "Кошелек"},
    position: {x: 0, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "2",
    data: {"label": "Проверка качества"},
    position: {x: 100, y: 100},
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "3",
    data: {"label": "Кошелек"},
    position: {x: 350, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "4",
    data: {"label": "Погрузка"},
    position: {x: 500, y: 100},
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "5",
    data: {"label": "Кошелек"},
    position: {x: 750, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "6",
    data: {"label": "Разгрузка"},
    position: {x: 900, y: 100},
    sourcePosition: 'right',
    targetPosition: 'left'
  },
  {
    id: "7",
    data: {"label": "Кошелек"},
    position: {x: 1100, y: 89},
    ...walletNodeDefaults
  },
  {
    id: "8",
    data: {label: "РЕГ"},
    position: {x: 140, y: -150},
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  {
    id: "9",
    data: {label: "ЛАБ"},
    position: {x: 140, y: 350},
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  {
    id: "10",
    data: {label: "ПЩ"},
    position: {x: 350, y: 350},
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  {
    id: "11",
    data: {label: "ЛО"},
    position: {x: 750, y: 350},
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  {
    id: "10",
    data: {label: "ПО"},
    position: {x: 1100, y: 350},
    style: {
      borderRadius: '100%',
      backgroundColor: '#fff',
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
];


const initialEdges = [
  {
    id: "1-2",
    source: "1", 
    target: "2", 
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
]

export { initialEdges, initialNodes };