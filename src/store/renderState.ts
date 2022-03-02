import { observable } from '../helper/observable';

export function create() {
  return observable({ hoveredKey: null });
}
