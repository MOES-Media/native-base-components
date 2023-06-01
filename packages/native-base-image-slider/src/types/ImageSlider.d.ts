import {FC} from 'react'

interface ImageProps {
  src: string;
  caption?: string;
}

interface ImageSliderProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  data: ImageProps[];
  separatorWidth?: number;
  withPagination?: boolean;
  width?: number;
}

declare const ImageSlider = FC<ImageSliderProps>;

export { ImageSliderProps };
export default ImageSlider