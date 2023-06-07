import { Text } from 'native-base';
import { FC, PropsWithChildren } from 'react';
import { CaptionProps } from '../types/Caption';

const textSize = (size?: 'sm' | 'lg') => {
  if (!size) return 14;
  if (size === 'sm') return 14;
  return 16;
};

const Caption: FC<PropsWithChildren<CaptionProps>> = ({ children, size }) => (
  <Text
    fontSize={textSize(size)}
    letterSpacing={0}
    lineHeight={21}
    mt={18}
    _web={{
      mt: 3,
    }}>
    {children}
  </Text>
);

export default Caption;
