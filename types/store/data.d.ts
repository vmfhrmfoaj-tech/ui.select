import { Dictionary } from '@t/options';

export const EMPTY_VALUE = '';

export interface Item {
  value: string;
  text: string;
  selected: boolean;
}

export interface Data {
  items: Item[];
  readonly itemMap: Dictionary<Item>;
}
