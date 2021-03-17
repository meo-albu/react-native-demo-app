import React from 'react'
import { View, Text } from 'react-native'

const FormControl = ({
    label,
    children,
    error
  }) => {
  return (
    <View style={{marginBottom: 20}}>
      {label && (<Text style={{fontWeight: '700', marginBottom: 5}}>{label}</Text>)}
      {children}
      {error ? (<Text style={{marginTop: 5, color: 'red'}}>{error}</Text>) : <Text></Text>}
    </View>
  )
}

export default FormControl
