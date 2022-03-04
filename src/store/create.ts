import { Store, RenderState } from '@t/store';
import { observable } from '../helper/observable';
import { SelectOptions } from '@t/options';
import { create as createOptions } from './data';

function createRenderState(options: SelectOptions) {
  const opened = options.autofocus ?? false;
  return observable({ hoveredKey: null, opened } as RenderState);
}

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
