import { SelectOptions } from '@t/options';
import { observable } from '../helper/observable';

export function create(options: SelectOptions) {
  const isOpen = options.isOpen ?? false;
  return observable({ hoveredKey: null, isOpen });
}
