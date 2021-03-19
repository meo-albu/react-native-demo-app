import React, { useEffect, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

import Details from './Details'
import FormControl from './FormControl'
import Select from './Select'

const Form = ({navigation}) => {
  const [touched, setTouched] = useState(false)

  const [checked, setChecked] = useState(false)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [position, setPosition] = useState('')
  const [radio, setRadio] = useState('')

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
    radio: "",
  })

  const handleSubmit = () => {
    if(!name.length || !email.length || !password.length || !position.length || !radio.length)
      setTouched(true)
    else {
      setError({
        name: "",
        email: "",
        password: "",
        position: "",
        radio: "",
      })
      navigation.navigate('Details', {
        details: {name, email, password, position, radio, subscribed: checked}
      })
      setTouched(false)
    }
  }

  useEffect(() => {
    if(touched) {
      if(!name.length)
        setError(state => ({...state, name: 'Name is required'}))
      else
        setError(state => ({...state, name: ''}))
      if (!email.length)
        setError(state => ({...state, email: 'Email is required'}))
      else
        setError(state => ({...state, email: ''}))
      if (!password.length)
        setError(state => ({...state, password: 'Password is required'}))
      else
        setError(state => ({...state, password: ''}))
      if (!position.length)
        setError(state => ({...state, position: 'Position is required'}))
      else
        setError(state => ({...state, position: ''}))
      if (!radio.length)
        setError(state => ({...state, radio: 'Number is required'}))
      else
        setError(state => ({...state, radio: ''}))
    }
  }, [name, email, password, position, radio, touched])

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{flex: 1, padding: 20}}>

        <FormControl label='Name:' error={error.name}>
          <TextInput 
            placeholder='John Doe'
            style={styles.input}
            onChangeText={text => setName(text)}
          />
        </FormControl>

        <FormControl label='Email:' error={error.email}>
          <TextInput 
            placeholder='johndoe@gmail.com'
            textContentType='emailAddress'
            keyboardType='email-address'
            style={styles.input}
            onChangeText={text => setEmail(text)}
          />
        </FormControl>

        <FormControl label='Password:' error={error.password}>
          <TextInput 
            placeholder='Secret123'
            secureTextEntry={true}
            textContentType='password'
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
        </FormControl>

        <FormControl label='Position:' error={error.position}>
          <Select 
            options={['Frontend', 'Backend', 'QA']}
            onChange={text => setPosition(text)}
          />
        </FormControl>

        <FormControl label='Choose a number:' error={error.radio}>
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              Component={TouchableWithoutFeedback}
              checked={radio === 'One'}
              onPress={() => setRadio('One')}
              title='One'
              checkedColor='#ff9980'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
            />
            <CheckBox
              Component={TouchableWithoutFeedback}
              checked={radio === 'Two'}
              onPress={() => setRadio('Two')}
              title='Two'
              checkedColor='#ff9980'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
            />
            <CheckBox
              Component={TouchableWithoutFeedback}
              checked={radio === 'Three'}
              onPress={() => setRadio('Three')}
              title='Three'
              checkedColor='#ff9980'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
            />
          </View>
        </FormControl>

        <FormControl>
          <CheckBox
            Component={TouchableWithoutFeedback}
            checked={checked}
            onPress={() => setChecked(state => !state)}
            title='Subscribe to newsletter'
            checkedColor='#ff9980'
          />
        </FormControl>

        <TouchableOpacity 
          style={{backgroundColor: '#ff9980', padding: 10, borderRadius: 30, alignItems: 'center'}}
          onPress={handleSubmit}>
          <Text style={{color: 'white', fontWeight: '700'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  }
})

const Stack = createStackNavigator()
const FormScreen = () => {
  return (
    <Stack.Navigator headerMode='none' >
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default FormScreen
