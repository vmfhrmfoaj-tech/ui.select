export type ComponentId = number;

export interface OptionType {
  value: string;
  text: string;
}

export type OptionsType = OptionType[];

export interface Store {
  readonly id: ComponentId;
  open: boolean;
  options: OptionsType;
}
