import { NativeModule, requireNativeModule } from 'expo';

import { DefinexAppleWalletModuleEvents } from './DefinexAppleWallet.types';

declare class DefinexAppleWalletModule extends NativeModule<DefinexAppleWalletModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DefinexAppleWalletModule>('DefinexAppleWallet');
