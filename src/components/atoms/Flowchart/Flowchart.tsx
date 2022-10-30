import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls } from 'reactflow';

import { Node as MyNode } from 'components/molecules';

import type { Connection, Edge, EdgeChange, Node, NodeChange } from 'reactflow';


const nodeTypes = {
  node: MyNode,
};

const initialNodes: Array<Node> = [
  { id: '1', type: 'node', position: { x: 0, y: 0 }, data: { value: 123 } },
];

const initialEdges: Array<Edge> = [];

export const Flowchart = () => {
  const [nodes, setNodes] = useState<Array<Node>>(initialNodes);
  const [edges, setEdges] = useState<Array<Edge>>(initialEdges);

  const onNodesChange = useCallback(
    (changes: Array<NodeChange>) => (
      setNodes((previousNodes) => applyNodeChanges(changes, previousNodes))
    ),
    []
  );

  const onEdgesChange = useCallback(
    (changes: Array<EdgeChange>) => (
      setEdges((previousEdges) => applyEdgeChanges(changes, previousEdges))
    ),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => (
      setEdges((previousEdges) => addEdge(connection, previousEdges))
    ),
    []
  );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};
