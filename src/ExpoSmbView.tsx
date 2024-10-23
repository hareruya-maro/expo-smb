import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSmbViewProps } from './ExpoSmb.types';

const NativeView: React.ComponentType<ExpoSmbViewProps> =
  requireNativeViewManager('ExpoSmb');

export default function ExpoSmbView(props: ExpoSmbViewProps) {
  return <NativeView {...props} />;
}
