import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap
} from 'react-flow-renderer';
import Sidebar from '../QuestionsSidebar';
import 'index.css';
import 'button.css';

import ButtonEdge from '../ButtonEdge.js';
import getNewId from 'helpers/getNewId';
import getInitialNodes from 'helpers/getInitialNodes';
import StandardPage from 'components/nodeTypes/pageNodes/StandardPage';

const initialNodes = getInitialNodes();

const initialEdges = [
  { id: 'e1-2', source: 'IntroPage', target: 'SummaryPage', type: 'buttonedge' },
];

const nodeTypes = {
  standardpage: StandardPage,
};

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const getId = () => getNewId();

function PagesCanvas() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      // check if the dropped element is valid
      return;
    }

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    let newId = getId();
    const newNode = {
      id: newId,
      type,
      position,
      // data: { label: `${type} node`, id: newId },
    };

    setNodes((nds) => nds.concat(newNode));
  },
    [reactFlowInstance]
  );

  const addNode = useCallback(() => {
    const id = getNewId();
    const newNode = {
      id,
      position: { x: Math.random() * 50, y: Math.random() * 50, },
      data: { id: id },
      type: "standardpage"
    };
    setNodes((nds) => nds.concat(newNode));
  }, []);

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
          >

            <button onClick={addNode} className="btn-add">
              Add page
            </button>

            <Controls />
            <MiniMap />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default PagesCanvas;