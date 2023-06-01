import { TouchableNativeFeedbackProps, TouchableOpacityProps } from 'react-native';

export type TouchableProps = TouchableOpacityProps | TouchableNativeFeedbackProps;

declare const Touchable = React.FC<TouchableProps>;

export { Touchable };
