---
sidebar_position: 2
---

# ImageSlider

The `ImageSlider` component is a customizable image slider that allows you to display a collection of images with optional pagination. It is built using `native-base`, `react`, and `react-native` and can be used on both web and mobile.

## Importing the Component
To use the `ImageSlider` component in your project, import it as follows:

```javascript
import ImageSlider from '@moes-media/native-base-components-image-slider';
```

## Props

The `ImageSlider` component accepts the following props:

- `data` (required): An array of objects representing the images to be displayed in the slider. Each object should have a `src` property that contains the image source and an optional `caption` property for the image caption.

- `separatorWidth` (optional): The width of the separator between each image in the slider. If not provided, the default value is `0`.

- `withPagination` (optional): A boolean value indicating whether to display pagination indicators at the bottom of the slider. If set to `true`, pagination indicators will be shown. The default value is `false`.

- `width` (optional): The width of the slider. If not provided, the default width will be determined based on the device's screen dimensions.

- `autoPlay` (optional): A boolean value indicating whether the slider should automatically transition to the next slide. If set to `true`, the slider will automatically play. The default value is `false`.

- `autoPlayInterval` (optional): The time interval (in milliseconds) between each automatic slide transition. This prop is only applicable when `autoPlay` is set to `true`. If not provided, the default interval is `3000` milliseconds.

## Example Usage

Here's an example of how you can use the `ImageSlider` component:

```javascript
const images = [
  { src: 'path/to/image1.jpg', caption: 'Image 1' },
  { src: 'path/to/image2.jpg', caption: 'Image 2' },
  { src: 'path/to/image3.jpg', caption: 'Image 3' },
];

function MyComponent() {
  return (
      <ImageSlider
        data={images}
        separatorWidth={10}
        withPagination={true}
        width={350}
        autoPlay={true}
        autoPlayInterval={5000}
      />
  );
}
```
