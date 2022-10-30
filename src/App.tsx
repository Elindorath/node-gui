import { Global } from '@emotion/react';
import { Flowchart } from 'components/atoms/Flowchart/Flowchart';
import 'reactflow/dist/base.css';

import { globalCss } from './global.style';


export const App = () => {
  return (
    <>
      <Global styles={globalCss} />

      <Flowchart />
    </>
  );
};
