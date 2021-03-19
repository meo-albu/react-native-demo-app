import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Platform, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import {Overlay} from 'react-native-elements'

const Timepicker = () => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(new Date())
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event, selectedDate) => {
    const timestamp = selectedDate || new Date()
    const hours = timestamp.getHours()
    const minutes = timestamp.getMinutes()
    setShow(Platform.OS === 'ios')
    setInputValue(`${('0' + hours).slice(-2)} : ${('0' + minutes).slice(-2)}`)
    setValue(selectedDate || new Date())
  }

  const hideOverlay = () => {
    setShow(false)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex: 1}}  accessible={false}>
      <View style={{flex: 1, padding: 15}}>
        <TextInput 
          style={styles.input}
          placeholder='Select time'
          value={inputValue}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />

        {Platform.OS === 'ios' ? (
          <Overlay isVisible={show} onBackdropPress={hideOverlay} style={{
            flex: 1, 
            width: '200', 
            justifyContent: 'flex-end',  
            backgroundColor: 'transparent',
          }}>
            <View style={{
              borderColor: '#333', 
              borderBottomWidth: 1, 
              height: 50, 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexDirection: 'row', 
            }}>
              <TouchableOpacity onPress={hideOverlay}>
                <Text style={{ paddingHorizontal: 15 }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideOverlay}>
                <Text style={{ paddingHorizontal: 15, color: '#ff9980' }}>Done</Text>
              </TouchableOpacity>
            </View>
            <DateTimePicker
              value={value}
              mode='time'
              is24Hour={true}
              display="default"
              onChange={handleChange}
              style={{ width: 200 }}
            />
          </Overlay>
        ) : (
          show && (
            <DateTimePicker
              value={value}
              mode='time'
              is24Hour={true}
              display="default"
              onChange={handleChange}
            />
          )
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