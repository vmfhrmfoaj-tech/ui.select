import { h, render } from 'preact';
import Select from '@t/index';
import { Root } from './view/root';
import { Store } from '../types/store';
import { createStore } from './store';
import { Dispatch, createDispatcher } from './dispatch';

export default class implements Select {
  el: HTMLElement;

  private store: Store;

  private dispatch: Dispatch;

  public constructor(options: any) {
    const { el } = options;
    const store = createStore(1, options);
    const dispatch = createDispatcher(store);

    this.el = el;

    this.store = store;
    this.dispatch = dispatch;

    render(<Root store={store} dispatch={dispatch} rootElement={el} />, el);
  }

  public open(): void {
    this.dispatch('setOpen', true);
  }

  public close(): void {
    this.dispatch('setOpen', false);
  }
}
