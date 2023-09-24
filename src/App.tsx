import { ReactFlowProvider } from 'reactflow';

import { FlowProvider } from 'hooks';

import { Layout } from 'components/atoms/Layout/Layout';


export const App = () => {
  return (
    <ReactFlowProvider>
      <FlowProvider>
        <Layout />
      </FlowProvider>
    </ReactFlowProvider>
  );
};
