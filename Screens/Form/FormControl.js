import React from 'react'
import { View, Text } from 'react-native'

const FormControl = ({
    label,
    children
  }) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{fontWeight: '700', marginBottom: 5}}>{label}</Text>
      {children}
    </View>
  )
}

export default FormControl
