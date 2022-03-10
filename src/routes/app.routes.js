import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';
// import { Container } from './styles';
//componentes
import Home from '../pages/Home';
const Tab = createBottomTabNavigator();
const AppRoutes = () => {
  return (
    <Tab.Navigator
      // tabBarPosition='bottom'

      screenOptions={{
        // tabBarInactiveBackgroundColor:"#c4c4c4",
        // tabBarActiveBackgroundColor:"#c4c4",
        tabBarActiveTintColor:'#000',
        headerShown:false,
        tabBarLabelStyle:{fontSize:12}
        // tabBarIndicatorStyle: {height: 5, borderRadius: 3, width:50, left:55},
        // tabBarContentContainerStyle: {height: 50},
        // tabBarLabelStyle:{fontSize: 12, fontStyle: 'normal' }
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
        component={Home}
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