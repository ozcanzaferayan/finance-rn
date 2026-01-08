import { requireNativeView } from 'expo';
import * as React from 'react';

import { DefinexAppleWalletViewProps } from './DefinexAppleWallet.types';

const NativeView: React.ComponentType<DefinexAppleWalletViewProps> =
  requireNativeView('DefinexAppleWallet');

export default function DefinexAppleWalletView(props: DefinexAppleWalletViewProps) {
  return <NativeView {...props} />;
}
