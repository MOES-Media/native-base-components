/* eslint-disable react/jsx-props-no-spreading */
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { isAndroid, isIos } from '@moes-media/native-base-components-utils';
import { TouchableProps } from '../../types/Touchable';

const Touchable: FC<TouchableProps> = ({ children, ...rest }) => {
  if (isIos()) {
    return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
  }
  if (isAndroid()) {
    return <TouchableNativeFeedback {...rest}>{children}</TouchableNativeFeedback>;
  }
  return (
    <TouchableOpacity activeOpacity={1} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
