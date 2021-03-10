import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const HomeScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()
const HomeScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreenComponent} />
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

export default HomeScreen
