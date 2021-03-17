import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import FormControl from './FormControl'
import CheckBox from '@react-native-community/checkbox';

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
        <TouchableWithoutFeedback
          onPress={() => setChecked(state => !state)}
          accessible={false}
        >
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={checked}
              // onChange={() => setChecked(state => !state)}
              tintColor={'#ff9980'}
              onTintColor={'#ff9980'}
              onFillColor={'#ff9980'}
              onCheckColor={'#ff9980'}
              tintColors={{true: '#ff9980'}}
            />
            <Text>Check this</Text>
          </View>
        </TouchableWithoutFeedback>
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
