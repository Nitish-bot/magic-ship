import { type ReactNode, useContext, useMemo } from 'react';
import { connect } from 'solana-kite';
import { ChainContext } from './ChainContext';
import { type ConnectionContextType, ConnectionContext } from './ConnectionContext';

// Define the props type
type ConnectionContextProviderProps = {
  children: ReactNode;
};

// Create the provider component
export function ConnectionContextProvider({ children }: ConnectionContextProviderProps) {
  const { solanaRpcSubscriptionsUrl, solanaRpcUrl } = useContext(ChainContext);

  // Create the context value
  const contextValue: ConnectionContextType = useMemo(() => {
    return {
      connection: connect(solanaRpcUrl, solanaRpcSubscriptionsUrl),
    };
  }, [solanaRpcSubscriptionsUrl, solanaRpcUrl]);

  return <ConnectionContext.Provider value={contextValue}>{children}</ConnectionContext.Provider>;
}
