import { Dictionary } from '@t/options';

export const EMPTY_VALUE = '';

export interface ItemData {
  value: string;
  label: string;
  selected: boolean;
}

export interface Data {
  value: string;
  items: ItemData[];
  readonly itemMap: Dictionary<ItemData>;
}
