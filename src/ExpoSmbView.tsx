import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSmbViewProps } from './ExpoSmb.types';

const NativeView: React.ComponentType<ExpoSmbViewProps> =
  requireNativeView('ExpoSmb');

export default function ExpoSmbView(props: ExpoSmbViewProps) {
  return <NativeView {...props} />;
}
