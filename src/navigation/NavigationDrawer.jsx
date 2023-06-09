import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {

  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={ HomeScreen } />
        <Drawer.Screen name='Settings' component={ SettingsScreen } />
    </Drawer.Navigator>    
  );

}