import { OptionsType } from '@t/store';

export interface Dictionary<T> {
  [index: string]: T;
}

export interface SelectOptions {
  el: HTMLElement;
  isOpen?: boolean;
  options?: OptionsType;
}
