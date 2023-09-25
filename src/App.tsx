import { StrictMode } from 'react';
import { ReactFlowProvider } from 'reactflow';

import { FlowProvider } from 'hooks';

import { Layout } from 'components/atoms/Layout/Layout';


export function App() {
  return (
    <StrictMode>
      <ReactFlowProvider>
        <FlowProvider>
          <Layout />
        </FlowProvider>
      </ReactFlowProvider>
    </StrictMode>
  );
}
