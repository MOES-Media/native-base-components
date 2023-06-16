import { Box, FlatList } from 'native-base';
import { FC, useEffect, useRef, useState } from 'react';
import { Dimensions, LayoutAnimation, FlatList as NativeFlatList } from 'react-native';
import { Pagination, SliderContentItem } from '@moes-media/native-base-components-atoms';
import { isMobile } from '@moes-media/native-base-components-utils';

const renderSeperator = (separatorWidth?: number) => () => <Box w={separatorWidth || 0} />;

const getDefaultWidth = () => (isMobile() ? Math.round(Dimensions.get('window').width) : 290);

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

const ImageSlider: FC<ImageSliderProps> = ({
  data,
  separatorWidth,
  withPagination,
  width,
  autoPlay,
  autoPlayInterval,
}) => {
  const imageSliderRef = useRef<NativeFlatList>(null);

  const [activeIdx, setActiveIdx] = useState(0);

  const sliderWidth = width || getDefaultWidth();
  const totalWidth = sliderWidth + (separatorWidth || 0);

  useEffect(() => {
    if (!autoPlay) {
      return () => ({});
    }
    const timerId = setInterval(() => {
      setActiveIdx(idx => {
        if (idx + 1 === data.length) {
          return 0;
        }
        return idx + 1;
      });
    }, autoPlayInterval || 3000);
    return () => {
      clearInterval(timerId);
    };
  }, [autoPlay, autoPlayInterval, data.length]);

  useEffect(() => {
    if (!imageSliderRef.current) return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    imageSliderRef.current.scrollToIndex({
      index: activeIdx,
      animated: true,
    });
  }, [activeIdx, imageSliderRef]);

  return (
    <Box w={totalWidth}>
      <FlatList
        ref={imageSliderRef}
        horizontal
        w={sliderWidth}
        pagingEnabled
        data={data}
        snapToInterval={totalWidth}
        renderItem={({ item, index: idx }) => (
          <SliderContentItem
            imageSource={item.src}
            key={`image-slider-content-${idx}`}
            width={sliderWidth}
            active={idx === activeIdx}
            caption={item.caption}
          />
        )}
        decelerationRate="fast"
        ItemSeparatorComponent={renderSeperator(separatorWidth)}
        keyExtractor={(_, idx) => `image-${idx}`}
        maxToRenderPerBatch={process.env.NODE_ENV === 'test' ? data.length : 1}
        initialScrollIndex={0}
        initialNumToRender={process.env.NODE_ENV === 'test' ? data.length : 1}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        getItemLayout={(_, index) => ({
          length: totalWidth,
          offset: totalWidth * index,
          index,
        })}
      />
      {withPagination && (
        <Box mt={isMobile() ? 18 : 3}>
          <Pagination
            numberOfItems={data.length}
            activeIndex={activeIdx}
            onIndicatorChange={setActiveIdx}
          />
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
