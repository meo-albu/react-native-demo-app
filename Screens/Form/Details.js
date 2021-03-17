import React from 'react'
import { View, Text, Button } from 'react-native'

const Details = ({
    navigation, route
  }) => {

  const {name, email, password, position, radio, subscribed} = route.params.details

  return (
    <View>
      <Text style={{fontWeight: '700'}}>Your details:</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Password: {password}</Text>
      <Text>Position: {position}</Text>
      <Text>Number: {radio}</Text>
      <Text>Subscribed?: {subscribed ? 'Yes' : 'No'}</Text>

      <Button title='Go back' onPress={() => navigation.navigate('Form')} />
    </View>
  )
}

export default Details
