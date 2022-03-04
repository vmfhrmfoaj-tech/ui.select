import { Dictionary, SelectOptions } from '@t/options';
import { Data, ItemData } from '@t/store/data';
import { createMapFromArray } from '../helper/common';
import { observable } from '../helper/observable';

function createItems(option: SelectOptions) {
  const newItems = (option.items ?? ([] as ItemData[])).map(
    ({ value, label, selected = false }) => {
      const _selected = option.value ? option.value === value : selected;

      return observable<ItemData>({
        value,
        label,
        selected: _selected,
      });
    }
  );

  return newItems;
}

export function create(option: SelectOptions) {
  const value = option.value ?? '';
  const items = createItems(option);
  const itemMap = createMapFromArray(items, 'value') as Dictionary<ItemData>;
  return observable<Data>({
    value,
    items,
    itemMap,
  });
}
