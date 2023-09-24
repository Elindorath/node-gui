import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { colors } from 'components/foundation/colors.css';


const node = recipe({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: colors.gray750,
    minWidth: 200,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    gap: 4,
  },
  variants: {
    selected: {
      true: {
        outlineWidth: 1,
        outlineColor: colors.red,
        outlineStyle: 'solid',
      },
      false: {
        outlineWidth: 0,
      },
    },
  },
});

export const styles = {
  node,
};
