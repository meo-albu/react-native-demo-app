import React from 'react'
import { View, Image } from 'react-native'

export default ({
    uri, width, height
  }) => {

  return (
    <View>
      <Image 
        source={{uri, width, height}}
      />
    </View>
  )
}