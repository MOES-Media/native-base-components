import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NativeBaseProvider } from 'native-base';

export const decorators = [
  withBackgrounds,
  Story => (
    <NativeBaseProvider>
      <Story />
    </NativeBaseProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'plain',
    values: [
      { name: 'plain', value: 'white' },
      { name: 'warm', value: 'hotpink' },
      { name: 'cool', value: 'deepskyblue' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
