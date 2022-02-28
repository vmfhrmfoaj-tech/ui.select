import { Store } from '@t/store';
import { observable } from '../helper/observable';
import { SelectOptions } from '@t/options';

export function createStore(id: number, options: SelectOptions): Store {
  const store = observable({
    id,
    open: options.open ?? false,
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
