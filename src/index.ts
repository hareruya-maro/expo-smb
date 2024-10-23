import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSmb.web.ts
// and on native platforms to ExpoSmb.ts
import ExpoSmbModule from './ExpoSmbModule';
import ExpoSmbView from './ExpoSmbView';
import { ChangeEventPayload, ExpoSmbViewProps } from './ExpoSmb.types';

// Get the native constant value.
export const PI = ExpoSmbModule.PI;

export function hello(): string {
  return ExpoSmbModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSmbModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSmbModule ?? NativeModulesProxy.ExpoSmb);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSmbView, ExpoSmbViewProps, ChangeEventPayload };
