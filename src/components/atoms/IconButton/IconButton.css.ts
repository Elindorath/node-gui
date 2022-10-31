import { createVar, style } from '@vanilla-extract/css';


const color = createVar();

const iconButton = style({
  borderRadius: 4,
  width: 32,
  height: 32,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: `rgb(${color})`,

  ':hover': {
    borderColor: `rgba(${color}, 0.8)`,
  },
});

export const styles = {
  iconButton,
  icon: style({
    color: `rgb(${color})`,
    selectors: {
      [`${iconButton}:hover &`]: {
        color: `rgba(${color}, 0.8)`,
      },
    },
  }),
  vars: {
    color,
  },
};
