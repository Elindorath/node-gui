import { NodeHeader, NodeItemList, NodeOutput, NodeFooter } from 'components/atoms';

import { styles } from './Node.style';


export function Node() {
  return (
    <div css={styles.node}>
      <NodeHeader label="Load image" />
      {/* <NodeItemList title="Inputs"></NodeItemList> */}
      <NodeItemList
        title="Outputs"
        items={[
          { label: 'Image', isForwardable: false },
          { label: 'Directory', isForwardable: true },
        ]}
        renderItem={({ label, isForwardable }) => (
          <NodeOutput label={label} isForwardable={isForwardable} />
        )}
      />
      <NodeFooter />
    </div>
  );
}
