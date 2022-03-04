import { Store } from '@t/store';
import { observable } from '../helper/observable';
import { SelectOptions } from '@t/options';
import { create as createRenderState } from './renderState';
import { create as createOptions } from './data';

export function createStore(id: number, _options: SelectOptions): Store {
  const renderState = createRenderState(_options);
  const data = createOptions(_options);

  const store = observable({
    id,
    renderState,
    data,
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
