import { Store } from '@t/store';

export function setHoveredKey({ renderState }: Store, key: string | null) {
  renderState.hoveredKey = key;
}

export function setOpen({ renderState }: Store, _open: boolean) {
  renderState.isOpen = _open;
}
