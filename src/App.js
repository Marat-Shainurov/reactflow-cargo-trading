import React from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import nodesData from './flow_data.json';
import { initialEdges, initialNodes } from './nodes_and_edges';
import Regulator from './regulator-nodes';

function App() { 

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange} 
        onEdgesChange={onEdgesChange} 
        fitView
        attributionPosition="bottom-left"
        >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
