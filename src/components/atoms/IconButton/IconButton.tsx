import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { styles } from './IconButton.css';

import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import type Color from 'colorjs.io';


type IconButtonProps = {
  icon: IconDefinition;
  color?: InstanceType<typeof Color>;
};

export const IconButton = ({ icon, color }: IconButtonProps) => {
  return (
    <button
      className={styles.iconButton}
      style={assignInlineVars({
        [styles.vars.color]: color ? color.srgb.join(', ') : '',
      })}
    >
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </button>
  );
};
