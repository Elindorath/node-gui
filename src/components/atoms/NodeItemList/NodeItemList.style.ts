import { css } from '@emotion/react';
import { colors } from 'components/foundation';

export const styles = {
  nodeItemListRoot: css({
  }),
  nodeItemListHeader: css({
    paddingTop: 8,
    textAlign: 'center',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    color: colors.gray400,
  }),
  nodeItemList: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingTop: 8,
  }),
};
