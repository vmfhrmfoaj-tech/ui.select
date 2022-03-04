import { Dictionary } from '@t/options';

export const EMPTY_VALUE = '';

export interface Item {
  value: string;
  label: string;
  selected: boolean;
}

export interface Data {
  value: string;
  items: Item[];
  readonly itemMap: Dictionary<Item>;
}
