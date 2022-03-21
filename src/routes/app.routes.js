import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';
// import { Container } from './styles';
//componentes
import Home from '../pages/Home';
import User from '../pages/UserProfile';
import { useTheme } from 'styled-components';
const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      
      screenOptions={{
        tabBarStyle:{
          borderTopColor:'transparent',
          backgroundColor: theme.background,
        },      
        tabBarActiveTintColor:theme.primaryColor,
        headerShown:false,
        tabBarLabelStyle:{fontSize:12},
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
       
          
        }}

      />
      <Tab.Screen
        name='User'
        component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="people" size={size} color={color} />
          ),
        }}

      />
    </Tab.Navigator>
  );
}

export default AppRoutes;