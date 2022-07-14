// import { StatusBar } from 'expo-status-bar';
import { LogBox, StatusBar, useColorScheme } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/services/queryClient';
import themes from './src/themes';
import { NativeBaseProvider, extendTheme } from 'native-base';
import UserProfile from './src/pages/UserProfile';

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  "Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info."
]);
export default function App() {
  const deviceTheme = useColorScheme();
  console.log(deviceTheme)
  const theme = themes[deviceTheme] || themes.dark;

  const config = {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  }
  const colors = {
    //add colorScheme
    primary: {
      50: '#F5F5F5',
      100: '#F5F5DC',
      200: '#FDF5E6',
      300: '#FFFFF0',
      400: '#FAF0E6',
      500: '#F2A951',
      600: '#F2A951',
      700: '#FFEBCD',
      800: '#FFE4C4',
      900: '#FFFFE0',
    },
    amber: {
      400: '#d97706',
    },
  }

  const themeNB = extendTheme({ config, colors },)


  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <QueryClientProvider client={queryClient}>
            <NativeBaseProvider theme={themeNB}>
              <Routes />
              {/* <UserProfile /> */}
            </NativeBaseProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

