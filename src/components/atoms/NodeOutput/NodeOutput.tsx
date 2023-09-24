import type { NodeIOType } from 'models/NodeIO';
import { Position } from 'reactflow';

import { NodeHandle } from '../NodeHandle/NodeHandle';

import { styles } from './NodeOutput.css';


type NodeOutputProps = {
  label: string;
  id: string;
  type: NodeIOType;
  isForwardable: boolean;
};

export function NodeOutput({ label, id, type, isForwardable }: NodeOutputProps) {
  return (
    <div className={styles.nodeOutput}>
      <div className={styles.nodeItemLabel}>{label}</div>
      {isForwardable && <NodeHandle type="source" position={Position.Right} id={id} connectionType={type} />}
    </div>
  );
}
