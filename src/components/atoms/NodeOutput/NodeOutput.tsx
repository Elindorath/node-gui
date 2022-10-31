import { Handle, Position } from 'reactflow';

import { styles } from './NodeOutput.css';


type NodeOutputProps = {
  label: string;
  isForwardable: boolean;
};

export function NodeOutput({ label, isForwardable }: NodeOutputProps) {
  return (
    <div className={styles.nodeOutput}>
      <div className={styles.nodeItemLabel}>{label}</div>
      {isForwardable && <Handle type="source" position={Position.Right} id="label" className={styles.nodeItemHandle} />}
    </div>
  );
}
