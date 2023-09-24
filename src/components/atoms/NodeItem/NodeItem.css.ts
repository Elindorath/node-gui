import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  nodeItem: style({
    backgroundColor: colors.gray700,
    minHeight: 30,
  }),
};
