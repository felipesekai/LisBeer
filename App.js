// import { StatusBar } from 'expo-status-bar';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/services/queryClient';
import themes from './src/themes';

LogBox.ignoreLogs([
 "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
 "Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info."
]);
export default function App() {
  const deviceTheme = useColorScheme();
  console.log(deviceTheme)
  const theme = themes[deviceTheme] || themes.dark;

  return (
   <NavigationContainer>
     <AuthProvider>
       <ThemeProvider theme={theme}>
      <StatusBar/>
      <QueryClientProvider client={queryClient}>
      <Routes/>
      </QueryClientProvider>
      </ThemeProvider>
      </AuthProvider>
      </NavigationContainer>
  );
}

