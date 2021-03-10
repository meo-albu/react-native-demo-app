import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const AboutScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 18}}>This is a demo app.</Text>
    </View>
  )
}


const Stack = createStackNavigator()
const AboutScreen = () => (
  <Stack.Navigator
    
  >
    <Stack.Screen name="About" component={AboutScreenComponent} />
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

export default AboutScreen
