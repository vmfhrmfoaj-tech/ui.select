import { Dictionary } from '@t/options';

export const EMPTY_VALUE = '';

export interface ItemData {
  index: number;
  value: string;
  label: string;
  selected: boolean;
  disabled: boolean;
}

export interface Data {
  value: string;
  items: ItemData[];
  readonly itemMap: Dictionary<ItemData>;
}
