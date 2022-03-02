import { Store } from '@t/store';
import { observable } from '../helper/observable';
import { SelectOptions } from '@t/options';
import { create as createRenderState } from './renderState';

export function createStore(id: number, options: SelectOptions): Store {
  const renderState = createRenderState();

  const store = observable({
    id,
    renderState,
    open: options.open ?? false,
    options: options.options ?? [],
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
