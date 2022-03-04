import { Store } from '@t/store';

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
