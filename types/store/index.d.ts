import { RenderState } from './renderState';

export type ComponentId = number;

export interface OptionType {
  value: string;
  text: string;
}

export type OptionsType = OptionType[];

export interface Store {
  readonly id: ComponentId;
  renderState: RenderState;
  open: boolean;
  options: OptionsType;
}
