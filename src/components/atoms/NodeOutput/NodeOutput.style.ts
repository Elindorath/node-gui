import { css } from '@emotion/react';
import { colors } from 'components/foundation';

export const styles = {
  nodeOutput: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 32,
    position: 'relative',
  }),
  nodeItemLabel: css({
    fontSize: '1.4rem',
  }),
  nodeItemHandle: css({
    height: 16,
    width: 16,
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(50%, -50%)',
    backgroundColor: colors.red,
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: 0,
    cursor: 'default!important',
  }),
};
