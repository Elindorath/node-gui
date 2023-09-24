import { memo, useMemo } from 'react';
import { getBezierPath } from 'reactflow';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { nodeIOColorMap } from 'models/NodeIO';

import { styles } from './CustomEdge.css';

import type { EdgeProps} from 'reactflow';
import type { NodeIOType } from 'models/NodeIO';


type EdgeData = { type: NodeIOType };

export const CustomEdge = memo(function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
  style = {},
  data,
  markerEnd,
}: EdgeProps<EdgeData>) {
  const [edgePath] = useMemo(
    () => getBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    }),
    [sourcePosition, sourceX, sourceY, targetPosition, targetX, targetY]
  );

  return (
    <g className={styles.group}>
      <path
        id={id}
        d={edgePath}
        className={styles.hoverPath({ isSelected: selected })}
      />
      <path
        id={id}
        d={edgePath}
        className={styles.path({ isSelected: selected })}
        style={assignInlineVars({
          [styles.vars.edgeColor]: nodeIOColorMap[`${data?.type}`],
        })}
        markerEnd={markerEnd}
      />
      <path
        id={id}
        d={edgePath}
        className={styles.oversizedPath}
      />
    </g>
  );
});
