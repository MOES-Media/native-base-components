import { Box, FlatList } from 'native-base';
import { FC, useEffect, useRef, useState } from 'react';
import { Dimensions, LayoutAnimation, FlatList as NativeFlatList } from 'react-native';
import { ImageSliderProps } from './types/ImageSlider';
import { Pagination, SliderContentItem } from './atoms';
import { isMobile } from './utils';

const renderSeperator = (separatorWidth?: number) => () => <Box w={separatorWidth || 0} />;

const getDefaultWidth = () => (isMobile() ? Math.round(Dimensions.get('window').width) : 290);

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
    });
  }, [activeIdx, imageSliderRef]);

  return (
    <Box w={sliderWidth}>
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
          />
        )}
        decelerationRate="fast"
        ItemSeparatorComponent={renderSeperator(separatorWidth)}
        keyExtractor={(_, idx) => `image-${idx}`}
        maxToRenderPerBatch={1}
        initialScrollIndex={0}
        initialNumToRender={1}
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
        <Box mt={18}>
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
