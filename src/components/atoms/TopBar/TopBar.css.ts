import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation';


export const styles = {
  topBar: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  }),
  topBarLeft:  style({}),
  topBarCenter:  style({}),
  topBarRight:  style({}),
  play: style({
    boxShadow: `0 0 0 1px ${colors.green}`,
    borderRadius: 4,
    width: 32,
    height: 32,
  }),
};
