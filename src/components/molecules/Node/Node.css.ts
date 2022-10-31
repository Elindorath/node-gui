import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation';


export const styles = {
  node: style({
    display: 'inline-flex',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: colors.gray700,
    minWidth: 200,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }),
};
