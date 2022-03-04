import { Store } from '@t/store';
import * as renderState from './renderState';
import * as data from './data';

const dispatchMap = {
  ...renderState,
  ...data,
};

type DispatchMap = typeof dispatchMap;
type DispatchFnKeys = keyof DispatchMap;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RestParameters<T> = T extends (first: any, ...args: infer P) => any ? P : never;

export interface Dispatch {
  <T extends DispatchFnKeys>(fname: T, ...args: RestParameters<DispatchMap[T]>): void;
}

export interface DispatchProps {
  dispatch: Dispatch;
}

export function createDispatcher(store: Store): Dispatch {
  return function dispatch(fname, ...args) {
    // @ts-ignore
    dispatchMap[fname](store, ...args);
  };
}
