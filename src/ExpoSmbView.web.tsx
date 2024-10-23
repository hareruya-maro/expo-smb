import * as React from 'react';

import { ExpoSmbViewProps } from './ExpoSmb.types';

export default function ExpoSmbView(props: ExpoSmbViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
