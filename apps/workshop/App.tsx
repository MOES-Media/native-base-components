import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import OnDevice from './.ondevice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const AppEntryPoint = Constants.expoConfig?.extra?.storybookEnabled === 'true' ? OnDevice : App;

export default AppEntryPoint;
