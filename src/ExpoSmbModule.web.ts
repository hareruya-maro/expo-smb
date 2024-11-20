import { registerWebModule, NativeModule } from 'expo';

import { ExpoSmbModuleEvents } from './ExpoSmb.types';

class ExpoSmbModule extends NativeModule<ExpoSmbModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoSmbModule);
