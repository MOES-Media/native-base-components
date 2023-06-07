import { TouchableNativeFeedbackProps, TouchableOpacityProps } from 'react-native';

type TouchableProps = TouchableOpacityProps | TouchableNativeFeedbackProps;

declare const Touchable = React.FC<TouchableProps>;

export { TouchableProps };
export default Touchable;
