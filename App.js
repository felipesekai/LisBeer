// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox, StatusBar } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';

LogBox.ignoreLogs([
 "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"
]);
export default function App() {
  return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar/>
      <Routes/>
      </AuthProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
