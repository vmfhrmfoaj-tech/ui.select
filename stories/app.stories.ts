import Component from '../src/component';
import { SelectOptions } from '../types/options';

import '../src/css/select.css';

export default {
  title: 'Default SELECT BOX',
};

function createComponent(options: SelectOptions) {
  const el = document.createElement('div');
  el.style.width = '200px';

  const selectbox = new Component({
    ...options,
    el,
  });

  return { el, selectbox };
}

export const defaultStory = () => {
  const { el } = createComponent({
    el: null,
    options: [
      { value: 'apple', text: 'Apple' },
      { value: 'banana', text: 'Banana' },
    ],
  });
  const rootEl = document.createElement('div');
  rootEl.appendChild(el);

  return rootEl;
};

const defaultNote = `
## Default SELECT BOX

- some contents
`;
defaultStory.story = { parameters: { notes: defaultNote } };

export const openStory = () => {
  const { el } = createComponent({
    el: null,
    options: [
      { value: 'apple', text: 'Apple' },
      { value: 'banana', text: 'Banana' },
    ],
    isOpen: true,
  });
  const rootEl = document.createElement('div');
  rootEl.appendChild(el);

  return rootEl;
};

const openNote = `
## Default SELECT BOX

- isOpen option(boolean) : false(default) | true
`;
openStory.story = { parameters: { notes: openNote } };
