import { Dictionary, SelectOptions } from '@t/options';
import { Data, Item } from '@t/store/data';
import { createMapFromArray } from '../helper/common';
import { observable } from '../helper/observable';

function createItems(option: SelectOptions) {
  const newItems = (option.items ?? ([] as Item[])).map(({ value, text, selected = false }) => {
    const _selected = option.value ? option.value === value : selected;

    return observable<Item>({
      value,
      text,
      selected: _selected,
    });
  });

  return newItems;
}

export function create(option: SelectOptions) {
  const value = option.value ?? '';
  const items = createItems(option);
  const itemMap = createMapFromArray(items, 'value') as Dictionary<Item>;
  return observable<Data>({
    value,
    items,
    itemMap,
  });
}
