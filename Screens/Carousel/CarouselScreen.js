import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Carousel from './Carousel'
import { StyleSheet } from 'react-native'

const images = [
  'https://images.unsplash.com/photo-1615229998660-29e3cb2232b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1615199348139-00bf10980769?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1612831660163-448ac8b3c13c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1615224571979-b9271f79998b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1615216865517-f2e0c2cd79a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
]

const CarouselScreenComponent = () => {
  return (
    <Carousel images={images} />
  )
}

const Stack = createStackNavigator()
const CarouselScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Carousel" component={CarouselScreenComponent} />
  </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CarouselScreen
