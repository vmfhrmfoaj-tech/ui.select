import { Item } from './store/data';

export interface Dictionary<T> {
  [index: string]: T;
}

export interface SelectOptions {
  el: HTMLElement;
  isOpen?: boolean;
  items?: Item[];
}
