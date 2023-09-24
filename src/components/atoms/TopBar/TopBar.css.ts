import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  topBar: style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.gray800,
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
