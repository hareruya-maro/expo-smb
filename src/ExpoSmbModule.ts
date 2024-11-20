import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSmbModuleEvents } from './ExpoSmb.types';

declare class ExpoSmbModule extends NativeModule<ExpoSmbModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSmbModule>('ExpoSmb');
