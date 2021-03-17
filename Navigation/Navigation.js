import React from 'react'

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from '../Screens/Home/Home';
import CarouselScreen from '../Screens/Carousel/CarouselScreen';
import SliderScreen from '../Screens/Slider/Slider';
import ListScreen from '../Screens/List/List';
import TimepickerScreen from '../Screens/Timepicker/Timepicker';
import Form from '../Screens/Form/Form';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Form' screenOptions={{
        headerShown: true,
      }}>
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
      <Drawer.Screen 
        name="List" 
        component={ListScreen} 
        options={{
          drawerIcon: () => <Ionicons name='md-list' size={20} color='#ff9980' />
        }} />
      <Drawer.Screen 
        name="Timepicker" 
        component={TimepickerScreen} 
        options={{
          drawerIcon: () => <Ionicons name='md-time' size={20} color='#ff9980' />
        }} />
      <Drawer.Screen 
        name="Form" 
        component={Form} 
        options={{
          drawerIcon: () => <Ionicons name='md-reader-sharp' size={20} color='#ff9980' />
        }} />
    </Drawer.Navigator>
  )
}

export default Navigation
