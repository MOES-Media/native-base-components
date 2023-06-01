import { Box, View } from 'native-base';
import { FC } from 'react';
import { IndicatorProps, PaginationProps } from '../types/Pagination';
import Touchable from './Touchable';
import { isMobile } from '../utils';

const getIndicatorWidth = () => (isMobile() ? 4 : 2);
const getActiveIndicatorWidth = () => (isMobile() ? 12 : 6);

const Indicator: FC<IndicatorProps> = ({ isActive }) => (
  <View
    width={isActive ? getActiveIndicatorWidth() : getIndicatorWidth()}
    height={isMobile() ? 4 : 2}
    borderRadius={isMobile() ? 12 : 4}
    mr={5}
    backgroundColor={isActive ? 'amber.400' : 'coolGray.300'}
  />
);

const Pagination: FC<PaginationProps> = ({ numberOfItems, activeIndex, onIndicatorChange }) => (
  <Box alignItems="center" justifyContent="center" flexDir="row">
    {Array.from({ length: numberOfItems }).map((_, idx) => (
      <Touchable onPress={() => onIndicatorChange(idx)} key={`pagination-indicator-${idx}`}>
        <Indicator isActive={idx === activeIndex} />
      </Touchable>
    ))}
  </Box>
);

export default Pagination;
