import Color from 'colorjs.io';

import { colors } from './colors.css';


/**
 * TODO: merge with `colors.css.ts` when https://github.com/vanilla-extract-css/vanilla-extract/issues/894 is fixed.
 */
type ColorsMap = {
  [K in keyof typeof colors]: InstanceType<typeof Color>;
};

export const Colors = Object.entries(colors)
  .reduce((exported, [name, color]) => {
    return {
      ...exported,
      [name]: new Color(color),
    };
  }, {} as ColorsMap);
