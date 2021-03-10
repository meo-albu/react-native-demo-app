import React from 'react'

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from '../Screens/Home/Home';
import CarouselScreen from '../Screens/Carousel/CarouselScreen';
import SliderScreen from '../Screens/Slider/Slider';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Slider'>
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
        name="Slider" 
        component={SliderScreen} 
        options={{
          drawerIcon: () => <Ionicons name='md-pin-sharp' size={20} color='#ff9980' />
        }} />
    </Drawer.Navigator>
  )
}

export default Navigation
