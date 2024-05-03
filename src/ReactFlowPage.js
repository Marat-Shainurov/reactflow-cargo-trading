import ReactFlow, { Controls, Background, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { initialEdges, initialNodes } from './nodes_and_edges';
import docNodes from './custom-nodes/doc-nodes';
import functionalBlockNodes from './custom-nodes/functional-block-nodes';
import mechanismsNodes from './custom-nodes/mechanisms-nodes';
import inputNodes from './custom-nodes/input-nodes';
import outputNodes from './custom-nodes/output-nodes';


const nodeTypes = {
  docNode: docNodes,
  blockNode: functionalBlockNodes,
  mechanismsNode: mechanismsNodes,
  inputNode: inputNodes,
  outputNode: outputNodes
};

function App() { 

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    
    <div>
      <div style={{ height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={onNodesChange} 
          onEdgesChange={onEdgesChange} 
          fitView
          attributionPosition="bottom-left"
          nodeTypes={nodeTypes}
          >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
