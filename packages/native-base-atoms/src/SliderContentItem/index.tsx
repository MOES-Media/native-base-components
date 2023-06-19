import { Box, Image } from 'native-base';
import { FC } from 'react';
import { Caption } from '@moes-media/native-base-components-typography';
import Touchable from '../Touchable';
import { SliderContentItemProps } from '../../types/SliderContentItem';

const SliderContentItem: FC<SliderContentItemProps> = ({ imageSource, width, caption }) => (
  <Touchable onPress={undefined}>
    <Box
      role="presentation"
      alignItems="center"
      justifyContent="center"
      accessibilityLabel="native-base-components-slider-content-item"
      testID="native-base-components-slider-content-item">
      <Image
        height={250}
        width={width}
        source={{ uri: imageSource }}
        alt="image-slider-content"
        testID="native-base-components-slider-content-item-image"
      />
      {caption && <Caption>{caption}</Caption>}
    </Box>
  </Touchable>
);

export default SliderContentItem;
