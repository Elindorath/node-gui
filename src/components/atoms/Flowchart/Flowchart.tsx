import { useCallback, useRef, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, useReactFlow } from 'reactflow';

import { useFlowContext } from 'hooks';

import { NodeData } from 'models/NodeData';
import { NodeInputData } from 'models/NodeInputData';
import { NodeOutputData } from 'models/NodeOutputData';
import { parseHandleId } from 'models/HandleId';
import { nodeIOColorMap } from 'models/NodeIO';
import { nodeList } from 'models/nodeList';

import { CustomEdge, CustomNode } from 'components/molecules';

import { styles } from './Flowchart.css';

import type { MouseEvent, TouchEvent, DragEvent} from 'react';
import type { Connection, Edge, EdgeChange, Node, NodeChange , OnConnectStartParams } from 'reactflow';

import type { NodeIOType } from 'models/NodeIO';
import type { NodeType } from 'models/nodeList';


type NodeWithData = Node<NodeData>;

const nodeTypes = {
  customNode: CustomNode,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const initialNodes: Array<NodeWithData> = [];

const initialEdges: Array<Edge> = [];

export const Flowchart = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const [nodes, setNodes] = useState<Array<NodeWithData>>(initialNodes);
  const [edges, setEdges] = useState<Array<Edge>>(initialEdges);

  const reactFlowInstance = useReactFlow();
  const { newConnection, setNewConnection } = useFlowContext();

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
    (connection: Connection) => {
      const { nodeId: sourceNodeId, handleId: sourceHandleId } = parseHandleId(connection.sourceHandle as string);
      const { nodeId: targetNodeId, handleId: targetHandleId } = parseHandleId(connection.targetHandle as string);

      const sourceNode = nodes.find(({ id }) => id === sourceNodeId) as NodeWithData;
      const targetNode = nodes.find(({ id }) => id === targetNodeId) as NodeWithData;

      if (sourceNode.data.outputs[sourceHandleId].type !== targetNode.data.inputs[targetHandleId].type) {
        return;
      }

      return setEdges((previousEdges) => addEdge({
        ...connection,
        type: 'customEdge',
        data: {
          type: sourceNode.data.outputs[sourceHandleId].type,
        },
      }, previousEdges));
    },
    [nodes]
  );

  const onConnectStart = useCallback(
    (event: MouseEvent | TouchEvent, params: OnConnectStartParams) => {
      const { nodeId, handleId } = parseHandleId(params.handleId as string);
      const node = nodes.find(({ id }) => id === nodeId) as NodeWithData;

      const type = node.data[params.handleType === 'source' ? 'outputs' : 'inputs'][handleId].type;

      setNewConnection({ ...params, type });
    },
    [nodes, setNewConnection]
  );

  const onConnectEnd = useCallback(
    () => {
      setNewConnection(undefined);
    },
    [setNewConnection]
  );

  const onDragOver = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    []
  );

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow') as NodeType;

      if (!reactFlowWrapper.current) {
        throw new Error('<ReactFlow /> ref is undefined');
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeBlueprint = nodeList[type];

      const newNode = {
        id: `${nodes.length + 1}`,
        type: 'customNode',
        position,
        data: new NodeData({
          name: nodeBlueprint.label,
          inputs: nodeBlueprint.inputs.map((input) => new NodeInputData({
            label: input.label,
            type: input.type as NodeIOType,
            value: '',
            isControllable: 'isControllable' in input ? input.isControllable : false,
            isCustomizable: 'isCustomizable' in input ? input.isCustomizable : false,
          })),
          outputs: nodeBlueprint.outputs.map((output) => new NodeOutputData({
            label: output.label,
            type: output.type as NodeIOType,
            isForwardable: 'isForwardable' in output ? output.isForwardable : false,
          })),
          computeFunction: () => undefined,
        }),
      };

      setNodes((_nodes) => _nodes.concat(newNode));
    },
    [nodes.length, reactFlowInstance]
  );

  return (
    <div className={styles.wrapper} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        connectionLineStyle={{ stroke: (!!newConnection && nodeIOColorMap[newConnection.type]) || 'none', opacity: 0.8 }}
        onDragOver={onDragOver}
        onDrop={onDrop}
        // onNodeClick={(event) => { event.preventDefault(); event.stopPropagation(); }}
        proOptions={{ hideAttribution: true }}
        maxZoom={4}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        className={styles.flowchart}
      >
        <Background className={styles.background} />
        <Controls />
      </ReactFlow>
      <div className={styles.overlay} />
    </div>
  );
};
