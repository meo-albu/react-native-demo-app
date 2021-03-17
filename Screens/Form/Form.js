import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { CheckBox } from 'react-native-elements'
import FormControl from './FormControl'

const Form = () => {
  const [checked, setChecked] = useState(false)
  return (
    <View
    style={{padding: 20}}>

      <FormControl label='Name:'>
        <TextInput 
          placeholder='John Doe'
          style={styles.input}
        />
      </FormControl>

      <FormControl label='Password:'>
        <TextInput 
          placeholder='Secret123'
          secureTextEntry={true}
          textContentType='password'
          style={styles.input}
        />
      </FormControl>

      <FormControl label='Password:'>
        <CheckBox
          Component={TouchableWithoutFeedback}
          checked={checked}
          onPress={() => setChecked(state => !state)}
          title='Check this'
          checkedColor='#ff9980'
        />
      </FormControl>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white', 
    padding: 10
  }
})

export default Form
