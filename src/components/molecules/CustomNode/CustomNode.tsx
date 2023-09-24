import { memo, useEffect } from 'react';
import { useNodes } from 'reactflow';
import { BsFileEarmarkPlus } from 'react-icons/bs';

import { NodeHeader, NodeItemList, NodeOutput, NodeFooter } from 'components/atoms';
import { NodeInput } from 'components/atoms/NodeInput/NodeInput';

import { Input } from 'components/atoms/Input/Input';
import { Textarea } from 'components/atoms/Textarea/Textarea';

import { styles } from './CustomNode.css';

import type { Node as NodeType } from 'reactflow';

import type { NodeData } from 'models/NodeData';
import { makeHandleId } from 'models/HandleId';


type NodeProps = NodeType<NodeData>;

export const CustomNode = memo(function CustomNode({ data, selected, id }: NodeProps) {
  // const nodes = useNodes();

  // useEffect(() => {
  //   console.log(nodes);
  // }, [nodes]);

  return (
    <div className={styles.node({
      selected,
    })}>
      <NodeHeader label={data.name} />
      <NodeItemList
        title="Inputs"
        items={data.inputs}
        renderItem={({ label, isControllable, isCustomizable, type }, i) => {
          return (
            <NodeInput
              label={label}
              isControllable={isControllable}
              isCustomizable={isCustomizable}
              id={makeHandleId({ nodeId: id, handleId: i })}
              type={type}
            />
          );
        }}
      />
      <NodeItemList
        title="Outputs"
        items={data.outputs}
        renderItem={({ label, type, isForwardable }, i) => (
          <NodeOutput label={label} isForwardable={isForwardable} id={`${id}-${i}`} type={type} />
        )}
      />
      <NodeFooter />
    </div>
  );
});
