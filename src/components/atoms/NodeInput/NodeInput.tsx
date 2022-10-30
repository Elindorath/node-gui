import { Handle, Position } from 'reactflow';

import { styles } from './NodeInput.style';


type NodeInputProps = {
  label: string;
  isForwardable: boolean;
};

export function NodeInput({ label, isForwardable }: NodeInputProps) {
  return (
    <div css={styles.nodeInput}>
      <div css={styles.nodeItemLabel}>{label}</div>
      {isForwardable && <Handle type="target" position={Position.Left} id="label" css={styles.nodeItemHandle} />}
    </div>
  );
}
