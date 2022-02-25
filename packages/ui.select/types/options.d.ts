export interface Dictionary<T> {
  [index: string]: T;
}

export interface SelectOptions {
  el: HTMLElement;
  open?: boolean;
}
