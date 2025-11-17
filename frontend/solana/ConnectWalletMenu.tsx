'use client'

import { StandardConnect, StandardDisconnect } from "@wallet-standard/core";
import type { UiWallet } from "@wallet-standard/react";
import { uiWalletAccountBelongsToUiWallet, useWallets } from "@wallet-standard/react";
import { FileExclamationPoint } from "lucide-react";
import { CornerRightDown } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorDialog } from "@/components/ErrorDialog";

import {
  Alert,
  AlertTitle,
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SelectedWalletAccountContext } from "@/solana/context/SelectedWalletAccountContext";
import { ConnectWalletMenuItem } from "@/solana/ConnectWalletMenuItem";
import { UnconnectableWalletMenuItem } from "@/solana/UnconnectableWalletMenuItem";
import { WalletAccountIcon } from "@/solana/WalletAccountIcon";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function ConnectWalletMenu({ children }: Props) {
  const { current: NO_ERROR } = useRef(Symbol());
  const wallets = useWallets();
  const [selectedWalletAccount, setSelectedWalletAccount] = useContext(SelectedWalletAccountContext);
  const [error, setError] = useState(NO_ERROR);
  const [forceClose, setForceClose] = useState(false);
  function renderItem(wallet: UiWallet) {
    return (
      <ErrorBoundary
        fallbackRender={({ error }) => <UnconnectableWalletMenuItem error={error} wallet={wallet} />}
        key={`wallet:${wallet.name}`}
      >
        <ConnectWalletMenuItem
          onAccountSelect={(account) => {
            setSelectedWalletAccount(account);
            setForceClose(true);
          }}
          onDisconnect={(wallet) => {
            if (selectedWalletAccount && uiWalletAccountBelongsToUiWallet(selectedWalletAccount, wallet)) {
              setSelectedWalletAccount(undefined);
            }
          }}
          onError={setError}
          wallet={wallet}
        />
      </ErrorBoundary>
    );
  }
  const walletsThatSupportStandardConnect = [];
  for (const wallet of wallets) {
    if (wallet.features.includes(StandardConnect) 
      && wallet.features.includes(StandardDisconnect) && wallet.chains.includes('solana:devnet')) {
      walletsThatSupportStandardConnect.push(wallet);
    }
  }
  return (
    <>
      <DropdownMenu open={forceClose ? false : undefined} onOpenChange={setForceClose.bind(null, false)}>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"}>
            {selectedWalletAccount ? (
              <>
                <WalletAccountIcon account={selectedWalletAccount} width="18" height="18" />
                {selectedWalletAccount.address.slice(0, 8)}
              </>
            ) : (
              children
            )}
            <CornerRightDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {wallets.length === 0 ? (
            <Alert color="orange">
              <FileExclamationPoint />
              <AlertTitle>This browser has no wallets installed.</AlertTitle>
            </Alert>
          ) : (
            <>
              {walletsThatSupportStandardConnect.map(renderItem)}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      {error !== NO_ERROR ? <ErrorDialog error={error} onClose={() => setError(NO_ERROR)} /> : null}
    </>
  );
}