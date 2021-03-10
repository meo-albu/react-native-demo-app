import React from 'react'

import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from '../Screens/Home/Home';
import CarouselScreen from '../Screens/Carousel/CarouselScreen';

function Settings({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Carousel'>
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{
          drawerIcon: () => <Ionicons name='md-home' size={20} color='#ff9980' />
        }} />
      <Drawer.Screen 
        name="Carousel" 
        component={CarouselScreen} 
        options={{
          drawerIcon: () => <Ionicons name='md-images' size={20} color='#ff9980' />
        }} />
      <Drawer.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          drawerIcon: () => <Ionicons name='md-settings' size={20} color='#ff9980' />
        }} />
    </Drawer.Navigator>
  )
}

export default Navigation
