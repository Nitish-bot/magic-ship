import type { UiWallet } from '@wallet-standard/react';
import { FileExclamationPoint } from 'lucide-react';
import { useState } from 'react';

import { ErrorDialog } from '@/components/ErrorDialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { WalletMenuItemContent } from './WalletMenuItemContent';

type Props = Readonly<{
  error: unknown;
  wallet: UiWallet;
}>;

export function UnconnectableWalletMenuItem({ error, wallet }: Props) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <DropdownMenuItem disabled onClick={() => setDialogIsOpen(true)}>
        <WalletMenuItemContent wallet={wallet}>
          <span style={{ textDecoration: 'line-through' }}>{wallet.name}</span>
        </WalletMenuItemContent>
        <div className='rt-BaseMenuShortcut rt-DropdownMenuShortcut'>
          <FileExclamationPoint
            className='rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon'
            style={{ height: 14, width: 14 }}
          />
        </div>
      </DropdownMenuItem>
      {dialogIsOpen ? (
        <ErrorDialog
          error={error}
          onClose={() => setDialogIsOpen(false)}
          title='Unconnectable wallet'
        />
      ) : null}
    </>
  );
}
