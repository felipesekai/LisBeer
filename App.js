import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthRouter from './src/routes/auth.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
export default function App() {
  return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar style="auto" />
      <AuthRouter/>
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
