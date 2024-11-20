export type OnLoadEventPayload = {
  url: string;
};

export type ExpoSmbModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};

export type ExpoSmbViewProps = {
  name: string;
};
