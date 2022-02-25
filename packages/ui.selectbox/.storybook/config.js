import { configure, addDecorator } from '@storybook/html';
import { makeDecorator } from '@storybook/addons';

const withDefaultConfig = makeDecorator({
  name: 'withDefaultConfig',
  wrapper: (getStory, context) => {
    return getStory(context);
  },
});

addDecorator(withDefaultConfig);
configure(require.context('../stories', true, /.stories.tsx?$/), module);
