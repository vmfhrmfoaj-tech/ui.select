import { Data } from './data';

export type ComponentId = number;

export interface Store {
  readonly id: ComponentId;
  renderState: RenderState;
  data: Data;
}

export interface RenderState {
  opened: boolean;
  hoveredKey: string | null;
}
