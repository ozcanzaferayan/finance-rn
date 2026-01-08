import { registerWebModule, NativeModule } from 'expo';

import { DefinexAppleWalletModuleEvents } from './DefinexAppleWallet.types';

class DefinexAppleWalletModule extends NativeModule<DefinexAppleWalletModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(DefinexAppleWalletModule, 'DefinexAppleWalletModule');
