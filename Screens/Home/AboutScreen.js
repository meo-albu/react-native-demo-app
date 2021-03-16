import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 18}}>This is a demo app.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})