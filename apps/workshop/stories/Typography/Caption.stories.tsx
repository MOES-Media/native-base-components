import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { Caption } from '@moes-media/native-base-components-typography';

const CaptionMeta: ComponentMeta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  args: {
    children: "Hello World... I'm a Caption, use me under a image",
  },
};

export default CaptionMeta;

type CaptionStory = ComponentStory<typeof Caption>;

export const Default: CaptionStory = (args) => <Caption {...args} />;
