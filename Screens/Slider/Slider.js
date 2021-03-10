import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Slider from '@react-native-community/slider'

const SliderComponent = ({
    min = 0, max = 100, value = 0, step = 0.01
  }) => {

  const [sliderValue, setSliderValue] = useState(value)
  const [showBubble, setShowBubble] = useState(false)

  const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      paddingHorizontal: 20,
      flexDirection: 'row',
    },
    slider: {
      position: 'relative',
      flex: 1,
    },
    value: {
      position: 'absolute',
      bottom: '100%',
      // borderColor: '#ff9980',
      // borderWidth: 1,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      flexDirection: 'row',
      left: `${sliderValue}%`,
      transform: [{translateX: -12}]
    }
  })

  return (
    <View>
      <View style={styles.container}>
        <Text>{min}</Text>
        <View style={styles.slider}>
          {
            showBubble &&
            <View style={{position: 'relative', marginHorizontal: 17}}>
              <View style={styles.value}>
                <Text style={{fontSize: 10}}>{Math.round(sliderValue)}</Text>
              </View>
            </View>
          }
          <Slider 
            style={{flex: 1}}
            thumbTintColor='#ff9980' 
            value={value}
            step={step}
            onValueChange={(val) => setSliderValue(val)}
            maximumValue={max}
            minimumValue={min}
            onSlidingStart={() => setShowBubble(true)}
            onSlidingComplete={() => setShowBubble(false)}
            minimumTrackTintColor='#ff9980'
            />
        </View>
        <Text>{max}</Text>
      </View>
      <View style={{padding: 30, alignItems: 'center'}}>
        <Text>Slider Value: {Math.round(sliderValue)}</Text>
      </View>
    </View>
  )
}



const Stack = createStackNavigator()
const SliderScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Slider" component={SliderComponent} />
  </Stack.Navigator>
)

export default SliderScreen
