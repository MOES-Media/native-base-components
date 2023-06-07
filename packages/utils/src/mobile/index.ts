import { Platform } from 'react-native';

export const isMobile = () => Platform.OS === 'android' || Platform.OS === 'ios';
export const isAndroid = () => Platform.OS === 'android';
export const isIos = () => Platform.OS === 'ios';
