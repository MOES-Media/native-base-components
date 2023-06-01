import ImageSlider from '@moes-media/native-base-components-image-slider';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1538655776941-6dcf10909d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1547930275-405fd0fcc8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
  {
    src: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },
];

const imagesWithCaptions = [
  {
    src: 'https://images.unsplash.com/photo-1538655776941-6dcf10909d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    caption: 'Image 1',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1680246615216-4b958369b5b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    caption: 'Image 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1547930275-405fd0fcc8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    caption: 'Image 5',
  },
];

const ImageSliderMeta: ComponentMeta<typeof ImageSlider> = {
  title: 'ImageSlider',
  component: ImageSlider,
  args: {
    data: images,
    withPagination: false,
    autoPlay: false,
  },
};

export default ImageSliderMeta;

type ImageSliderStory = ComponentStory<typeof ImageSlider>;

export const Default: ImageSliderStory = (args) => <ImageSlider {...args} />;
export const withPagination: ImageSliderStory = (args) => <ImageSlider {...args} withPagination />;
export const withCustomWidth: ImageSliderStory = (args) => <ImageSlider {...args} withPagination width={275}/>;
export const WithCaptions: ImageSliderStory = (args) => (
  <ImageSlider {...args} data={imagesWithCaptions} />
);
