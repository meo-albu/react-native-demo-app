import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Platform, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const Timepicker = () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (event, selectedDate) => {
    const timestamp = selectedDate || new Date()
    const hours = timestamp.getHours()
    const minutes = timestamp.getMinutes()
    setValue(`${('0' + hours).slice(-2)} : ${('0' + minutes).slice(-2)}`)
    setShow(Platform.OS !== 'ios')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex: 1}}  accessible={false}>
      <View style={{flex: 1, padding: 15}}>
        <TextInput 
          style={styles.input}
          placeholder='Select time'
          value={value}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        {
          show && (
            <DateTimePicker
              value={new Date()}
              mode='time'
              is24Hour={true}
              display="default"
              onChange={handleChange}
            />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 10
  }
})

export default Timepicker