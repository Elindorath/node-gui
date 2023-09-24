import { recipe } from '@vanilla-extract/recipes';
import { createVar } from '@vanilla-extract/css';
import { Position } from 'reactflow';

import { colors } from 'components/foundation/colors.css';


const handleSize = 48;

const baseBoxShadows = [
  '0 0 0 1px rgba(0, 0, 0, 0.25)',
  '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  '0 4px 6px -2px rgba(0, 0, 0, 0.05)',
];

const color = createVar();

export const styles = {
  nodeHandle: recipe({
    base: {
      height: 16,
      width: 16,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      transition: 'all 80ms ease-out, filter 200ms ease-out, opacity 200ms ease-out',
      transform: 'none',

      ':hover': {
        scale: 1.25,
      },

      '::before': {
        content: '',
        height: handleSize,
        width: handleSize,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
        cursor: 'default!important',
      },
    },
    variants: {
      isAllowed: {
        true: {
          filter: 'grayscale(0) opacity(1)',
        },
        false: {
          filter: 'grayscale(1) opacity(0.5)',

          ':hover': {
            opacity: 0,
          },
        },
      },
      isConnected: {
        false: {
          backgroundColor: color,
          boxShadow: baseBoxShadows.join(', '),
        },
        true: {
          backgroundColor: colors.gray900,
          boxShadow: [`0 0 0 2px ${color} inset`, ...baseBoxShadows].join(', '),
        },
      },
      position: {
        [Position.Left]: {
          left: 0,
          translate: '-40% -50%',
        },
        [Position.Right]: {
          right: 0,
          translate: '40% -50%',
        },
      },
    },
  }),
  vars: {
    color,
  },
};
