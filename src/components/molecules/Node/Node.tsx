import { NodeHeader, NodeItemList, NodeOutput, NodeFooter } from 'components/atoms';
import { NodeInput } from 'components/atoms/NodeInput/NodeInput';

import { styles } from './Node.css';


export function Node() {
  return (
    <div className={styles.node}>
      <NodeHeader label="Load image" />
      <NodeItemList
        title="Inputs"
        items={[
          { label: 'Image', isControllable: true },
          { label: 'Directory', isControllable: false },
        ]}
        renderItem={({ label, isControllable }) => (
          <NodeInput label={label} isControllable={isControllable} />
        )}
      />
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
