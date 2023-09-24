import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { colors } from './colors.css';


// const properties = defineProperties({
//   shorthands: {
//     padding: [
//       'paddingTop',
//       'paddingBottom',
//       'paddingLeft',
//       'paddingRight',
//     ],
//     paddingX: ['paddingLeft', 'paddingRight'],
//   },
// });

const colorProperties = defineProperties({
  conditions: {
    dark: {},
    light: { '@media': '(prefers-color-scheme: light)' },
  },
  defaultCondition: 'dark',
  properties: {
    backgroundColor: colors,
  },
});

export const sprinkles = createSprinkles();
