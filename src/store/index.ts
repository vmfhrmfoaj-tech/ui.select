import { Store } from '@t/store';
import { observable } from '../helper/observable';
import { SelectOptions } from '@t/options';
import { create as createOptions } from './data';

export function createStore(id: number, options: SelectOptions): Store {
  const hoveredKey = null;
  const opened = options.autofocus ?? false;
  const data = createOptions(options);

  const store = observable({
    id,
    data,
    opened,
    hoveredKey,
  });

  /*
  // manual observe to resolve circular references
  observe(() => {
    setAutoBodyHeight(store);
  });
  // makes the data observable as changes viewport
  observe(
    () => {
      createObservableData(store);
    },
    false,
    'lazyObservable'
  );
*/
  return store;
}
