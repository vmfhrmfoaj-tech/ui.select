import { Store } from '@t/store';
import { observable, observe } from '../helper/observable';

export function createStore(id: number, options: any): Store {
  const store = observable({
    id,
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
