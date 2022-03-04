import { Data } from './data';
import { RenderState } from './renderState';

export type ComponentId = number;

export interface Store {
  readonly id: ComponentId;
  renderState: RenderState;
  data: Data;
}
