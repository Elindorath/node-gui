import { createContext, useContext, useMemo, useState } from 'react';

import type { PropsWithChildren} from 'react';
import type { OnConnectStartParams } from 'reactflow';
import type { NodeIOType } from 'models/NodeIO';

type TypedConnection = OnConnectStartParams & { type: NodeIOType };

type FlowContextType = {
  newConnection: TypedConnection | undefined;
  setNewConnection: (connection: TypedConnection | undefined) => void;
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = function FlowProvider({ children }: PropsWithChildren) {
  const [newConnection, setNewConnection] = useState<TypedConnection | undefined>(undefined);

  const context = useMemo(
    () => ({
      newConnection,
      setNewConnection,
    }),
    [newConnection]
  );

  return (
    <FlowContext.Provider value={context}>
      {children}
    </FlowContext.Provider>
  );
};

export function useFlowContext() {
  const context = useContext(FlowContext);

  if (!context) {
    throw new Error('useFlowContext must be used within a FlowProvider');
  }

  return context;
}
