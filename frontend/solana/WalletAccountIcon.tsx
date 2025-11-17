import type { UiWalletAccount } from "@wallet-standard/react";
import { uiWalletAccountBelongsToUiWallet, useWallets } from "@wallet-standard/react";
import Image, { ImageProps} from "next/image";
import React from "react";

type Props = Partial<ImageProps> &
  Readonly<{
    account: UiWalletAccount;
  }>;

export function WalletAccountIcon({ account, ...imgProps }: Props) {
  const wallets = useWallets();
  let icon;
  if (account.icon) {
    icon = account.icon;
  } else {
    for (const wallet of wallets) {
      if (uiWalletAccountBelongsToUiWallet(account, wallet)) {
        icon = wallet.icon;
        break;
      }
    }
  }
  return icon ? <Image alt='wallet-icon' src={icon} {...imgProps} /> : null;
}