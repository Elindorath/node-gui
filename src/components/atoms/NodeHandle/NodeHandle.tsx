import { Handle, useEdges } from 'reactflow';
import { styles } from './NodeHandle.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import type { HandleProps, HandleType, Position } from 'reactflow';
import type { NodeIOType } from 'models/NodeIO';
import { nodeIOColorMap } from 'models/NodeIO';
import { useFlowContext } from 'hooks';
import { memo } from 'react';

type NodeHandleProps = {
  type: HandleType;
  connectionType: NodeIOType;
  position: typeof Position.Left | typeof Position.Right;
  id: HandleProps['id'];
};


export const NodeHandle = memo(function NodeHandle({ type, connectionType, position, id }: NodeHandleProps) {
  const edges = useEdges();
  const { newConnection } = useFlowContext();

  const isConnected = edges.some((edge) => edge[`${type}Handle`] === id);
  const isAllowed = !newConnection
    || newConnection.handleId === id
    || (newConnection.type === connectionType && newConnection.handleType !== type);

  return (
    <Handle
      type={type}
      position={position}
      id={id}
      className={styles.nodeHandle({
        isAllowed,
        isConnected,
        position,
      })}
      style={assignInlineVars({
        [styles.vars.color]: nodeIOColorMap[connectionType],
      })}
    />
  );
});
