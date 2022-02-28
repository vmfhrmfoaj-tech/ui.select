export type ComponentId = number;

export interface Store {
  readonly id: ComponentId;
  open: boolean;
}
