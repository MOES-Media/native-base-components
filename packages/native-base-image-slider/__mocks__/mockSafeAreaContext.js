import * as React from 'react';

export const SafeAreaProvider = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export const useSafeAreaInsets = () => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const SafeAreaView = ({ children }) => <React.Fragment>{children}</React.Fragment>;
