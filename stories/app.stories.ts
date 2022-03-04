import Component from '../src/component';

import '../src/css/select.css';

export default {
  title: 'Default SELECT BOX',
};

function createContainer(): HTMLElement {
  const el = document.createElement('div');
  el.style.width = '200px';

  return el;
}

export const defaultStory = () => {
  const el = createContainer();

  new Component({
    el,
    items: [
      { value: 'apple', text: 'Apple' },
      { value: 'banana', text: 'Banana' },
    ],
  });

  return el;
};

const defaultNote = `
## Default SELECT BOX

- some contents
`;
defaultStory.story = { parameters: { notes: defaultNote } };

export const openStory = () => {
  const el = createContainer();

  new Component({
    el,
    items: [
      { value: 'apple', text: 'Apple' },
      { value: 'banana', text: 'Banana' },
    ],
    autofocus: true,
  });

  return el;
};

const openNote = `
## Default SELECT BOX

- autofocus option(boolean) : false(default) | true
`;
openStory.story = { parameters: { notes: openNote } };

export const valueOptionStory = () => {
  const el = createContainer();

  new Component({
    el,
    items: [
      { value: 'apple', text: 'Apple' },
      { value: 'banana', text: 'Banana' },
    ],
    autofocus: true,
    value: 'banana',
  });

  return el;
};

const valueOptionNote = `
## Default SELECT BOX

- value(string)
`;
valueOptionStory.story = { parameters: { notes: valueOptionNote } };
