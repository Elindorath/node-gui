import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';


const nodeInput = recipe({
  base: {
    display: 'flex',
    paddingBottom: 8,
    minHeight: 32,
    gap: 4,
  },
  variants: {
    withChildren: {
      true: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: 4,
      },
      false: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: 8,
      },
    },
  },
});

const body = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    controllable: {
      true: { paddingLeft: 16, paddingRight: 8 },
      false: { paddingLeft: 8, paddingRight: 8 },
    },
    withChildren: {
      true: { width: '100%' },
      false: { width: 12 },
    },
  },
  compoundVariants: [
    {
      variants: {
        controllable: true,
        withChildren: false,
      },
      style: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  ],
});

export const styles = {
  nodeInput,
  nodeItemLabel: style({
    selectors: {
      [`${nodeInput({ withChildren: false }).split(' ').pop()} &`]: {
        fontSize: '1.4rem',
        fontWeight: 300,
      },
      [`${nodeInput({ withChildren: true }).split(' ').pop()} &`]: {
        fontSize: '1rem',
        fontWeight: 300,
      },
    },
  }),
  body,
};
