import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from 'components/foundation/colors.css';


const edgeColor = createVar();

const group = style({
  cursor: 'pointer',
});

const path = recipe({
  base: {
    stroke: edgeColor,
    strokeWidth: 2,
    fill: 'none',
    transitionProperty: 'stroke-width, filter',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in-out',

    selectors: {
      [`${group}:hover &`]: {
        strokeWidth: 4,
      },
    },
  },
  variants: {
    isSelected: {
      false: {},
      true: {
        strokeWidth: 4,
        // filter: `drop-shadow(0 0 1px ${'white'})`,

        // selectors: {
        //   [`${group}:hover &`]: {
        //     filter: `drop-shadow(0 0 2px ${'white'})`,
        //   },
        // },
      },
    },
  },
});

const hoverPath = recipe({
  base: {
    stroke: colors.gray300,
    strokeWidth: 5,
    fill: 'none',
    transitionProperty: 'stroke-width, opacity',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in-out',

    selectors: {
      [`${group}:hover &`]: {
        strokeWidth: 6,
      },
    },
  },
  variants: {
    isSelected: {
      false: {
        opacity: 0,
      },
      true: {
        opacity: 1,
      },
    },
  },
});

export const styles = {
  group,
  path,
  hoverPath,
  oversizedPath: style({
    stroke: 'none',
    strokeWidth: 24,
    fill: 'none',
  }),
  vars: {
    edgeColor,
  },
};
