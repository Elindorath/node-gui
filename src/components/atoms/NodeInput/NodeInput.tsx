import { Handle, Position } from 'reactflow';

import { styles } from './NodeInput.css';


type NodeInputProps = {
  label: string;
  isControllable: boolean;
  isCustomizable?: boolean;
};

export function NodeInput({ label, isControllable, isCustomizable }: NodeInputProps) {
  return (
    <div className={styles.nodeInput}>
      <div className={styles.nodeItemLabel}>{label}</div>
      {isControllable && <Handle type="target" position={Position.Left} id="label" className={styles.nodeItemHandle} />}
    </div>
  );
}
