import React, { useState } from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback, StyleSheet, FlatList, TouchableOpacity, Keyboard } from 'react-native'

const Select = ({
    options = ['one', 'two', 'three'],
    onChange
  }) => {

  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setValue(item)
          setShow(false)
          onChange && onChange(item)
        }}
        style={{padding: 10}}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white', 
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2
    },
    options: {
      height: show ? 'auto' : 0,
      backgroundColor: 'white',
      overflow: 'hidden'
    }
  })
  
  return (
    <View>
      <TextInput
        placeholder='Select'
        style={styles.input}
        value={value}
        onChangeText={(text) => setValue(text)}
        onFocus={() => setShow(true)}
      />
      <View style={styles.options}>
        {/* <FlatList
          data={options}
          keyExtractor={(ite, index) => index.toString()}
          renderItem={renderItem}
        /> */}
        {options.map(renderItem)}
      </View>
    </View>
  )
}

export default Select
