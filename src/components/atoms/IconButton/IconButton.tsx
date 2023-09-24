import { assignInlineVars } from '@vanilla-extract/dynamic';

import { styles } from './IconButton.css';

import type Color from 'colorjs.io';
import type { IconType } from 'react-icons';


type IconButtonProps = {
  Icon: IconType;
  color?: InstanceType<typeof Color>;
};

export const IconButton = ({ Icon, color }: IconButtonProps) => {
  return (
    <button
      className={styles.iconButton}
      style={assignInlineVars({
        [styles.vars.color]: color ? color.srgb.map((c) => `${c * 100}%`).join(', ') : '',
      })}
    >
      <Icon className={styles.icon} />
    </button>
  );
};
