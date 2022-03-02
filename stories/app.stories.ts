import Component from '../src/component';

import '../src/css/select.css';

export default {
  title: 'Default SELECT BOX',
};

function createComponent() {
  const el = document.createElement('div');
  el.style.width = '200px';

  const selectbox = new Component({
    el,
  });

  return { el, selectbox };
}

export const defaultStory = () => {
  const { el } = createComponent();
  const rootEl = document.createElement('div');
  rootEl.appendChild(el);

  return rootEl;
};

const note = `
## Default SELECT BOX

- some contents
`;
defaultStory.story = { parameters: { notes: note } };
