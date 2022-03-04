import { Store } from '@t/store';

export function setHoveredKey({ renderState }: Store, key: string | null) {
  renderState.hoveredKey = key;
}

export function setOpen({ renderState }: Store, _open: boolean) {
  renderState.opened = _open;
}

export function setValue({ data }: Store, value: string | null) {
  data.value = value ?? '';

  data.items.forEach((item) => {
    if (item.value === value) {
      item.selected = true;
    } else if (item.selected === true) {
      item.selected = false;
    }
  });
}
