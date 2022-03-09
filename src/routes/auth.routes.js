import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
// import { Container } from './styles';
const Stack = createNativeStackNavigator();
const routes = () => {

  return (
      <Stack.Navigator>
          <Stack.Screen
          name='Signin'
          component={Signin}
          />
          <Stack.Screen
          name='Signup'
          component={Signup}
          />
      </Stack.Navigator>
  );
}

export default routes;