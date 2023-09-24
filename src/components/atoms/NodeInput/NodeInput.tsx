import { memo } from 'react';
import { Position } from 'reactflow';
import { BsFileEarmarkPlus } from 'react-icons/bs';

import { NodeHandle } from '../NodeHandle/NodeHandle';
import { Input } from '../Input/Input';

import { styles } from './NodeInput.css';

import type { NodeIOType } from 'models/NodeIO';
import type { PropsWithChildren } from 'react';


type NodeInputProps = PropsWithChildren<{
  label: string;
  id: string;
  type: NodeIOType;
  isControllable?: boolean;
  isCustomizable?: boolean;
}>;

export const NodeInput = memo(function NodeInput({
  label,
  id,
  type,
  isControllable = false,
  isCustomizable = false,
  // children,
}: NodeInputProps) {
  const children = isCustomizable ? getChildren(type) : null;

  return (
    <div className={styles.nodeInput({
      withChildren: !!children,
    })}>
      <div className={styles.nodeItemLabel}>{label}</div>
      <div className={styles.body({
        controllable: isControllable,
        withChildren: !!children,
      })}>
        {children}
        {isControllable && <NodeHandle type="target" position={Position.Left} id={id} connectionType={type} />}
      </div>
    </div>
  );
});

function getChildren(type: NodeIOType) {
  switch (type) {
    case 'file':
      return <Input type="file" Icon={BsFileEarmarkPlus} />;
    case 'string':
      return <Input placeholder="Placeholder" />;
    case 'number':
      return <Input type="number" />;
  }
}
