import { Image } from 'native-base';
import { FC } from 'react';
import Touchable from './Touchable';
import { SliderContentItemProps } from '../types/SliderContentItem';

const SliderContentItem: FC<SliderContentItemProps> = ({ imageSource, width }) => (
  <Touchable onPress={undefined}>
    <Image height={250} width={width} source={{ uri: imageSource }} alt="image-slider-content" />
  </Touchable>
);

export default SliderContentItem;
