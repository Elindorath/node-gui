import { style } from '@vanilla-extract/css';


export const styles = {
  layout: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    padding: 8,
    minHeight: '100%',
    height: 0,
  }),
  layoutBody: style({
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
  }),
};
