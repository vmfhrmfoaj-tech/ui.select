import { h, render } from 'preact';
import SelectBox from '@t/index';
import { Root } from './view/root';
import { Store } from '../types/store';
import { createStore } from './store/create';
import { Dispatch, createDispatcher } from './dispatch/create';

/* eslint-disable global-require */
if ((module as any).hot) {
  require('preact/devtools');
}

export default class Grid implements SelectBox {
  el: HTMLElement;

  private store: Store;

  private componentEl: Element;
  private dispatch: Dispatch;

  public constructor(options: any) {
    const { el } = options;
    const store = createStore(1, options);
    const dispatch = createDispatcher(store);

    this.el = el;

    this.store = store;
    this.dispatch = dispatch;

    this.componentEl = render(<Root store={store} dispatch={dispatch} rootElement={el} />, el);
  }
}
