import { Data } from './data';

export type ComponentId = number;

export interface Store {
  readonly id: ComponentId;
  opened: boolean;
  data: Data;
  hoveredKey: string | null;
}
