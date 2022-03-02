import { Store } from '@t/store';

export function setHoveredKey({ renderState }: Store, key: string | null) {
  renderState.hoveredKey = key;
}
