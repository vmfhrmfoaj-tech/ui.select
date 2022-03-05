import { ItemData } from './store/data';

export interface Dictionary<T> {
  [index: string]: T;
}

export interface SelectOptions {
  el: HTMLElement;
  autofocus?: boolean;
  items?: ItemData[];
  value?: string;
  placeHolder?: string;
}
