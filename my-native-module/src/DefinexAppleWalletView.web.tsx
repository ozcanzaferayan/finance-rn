import * as React from 'react';

import { DefinexAppleWalletViewProps } from './DefinexAppleWallet.types';

export default function DefinexAppleWalletView(props: DefinexAppleWalletViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
