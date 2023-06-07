import { Box, Image } from 'native-base';
import { FC } from 'react';
import { Caption } from '@moes-media/native-base-components-typography/types';
import Touchable from '../Touchable';
import { SliderContentItemProps } from '../../types/SliderContentItem';

const SliderContentItem: FC<SliderContentItemProps> = ({ imageSource, width, caption }) => (
  <Touchable onPress={undefined}>
    <Box alignItems="center" justifyContent="center">
      <Image height={250} width={width} source={{ uri: imageSource }} alt="image-slider-content" />
      {caption && <Caption>{caption}</Caption>}
    </Box>
  </Touchable>
);

export default SliderContentItem;
