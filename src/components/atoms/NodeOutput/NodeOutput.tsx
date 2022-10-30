import { Handle, Position } from 'reactflow';

import { styles } from './NodeOutput.style';


type NodeOutputProps = {
  label: string;
  isForwardable: boolean;
};

export function NodeOutput({ label, isForwardable }: NodeOutputProps) {
  return (
    <div css={styles.nodeOutput}>
      <div css={styles.nodeItemLabel}>{label}</div>
      {isForwardable && <Handle type="source" position={Position.Right} id="label" css={styles.nodeItemHandle} />}
    </div>
  );
}
