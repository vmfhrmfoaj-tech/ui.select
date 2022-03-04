import { Store } from '@t/store';

export function setHoveredKey(store: Store, key: string | null) {
  store.hoveredKey = key;
}

export function setOpen(store: Store, _open: boolean) {
  store.opened = _open;
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
