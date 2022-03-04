import { Dictionary, SelectOptions } from '@t/options';
import { Data, Item } from '@t/store/data';
import { createMapFromArray } from '../helper/common';
import { observable } from '../helper/observable';

export function create(_options: SelectOptions) {
  const items = _options.items ?? [];
  const itemMap = createMapFromArray(items, 'value') as Dictionary<Item>;
  return observable<Data>({
    items,
    itemMap,
  });
}
