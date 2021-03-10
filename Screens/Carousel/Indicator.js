import React from 'react'
import { View, Animated } from 'react-native'

const Indicator = ({images, width, scrollX, scrollTo}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0, width, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      {
        images.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1.3, 0.9],
            extrapolate: 'clamp'
          })
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp'
          })
          return <Animated.View
            onTouchEnd={() => scrollTo(i * width)}
            key={`${i}`}
            style={{
              width: 10,
              height: 10,
              backgroundColor: 'white',
              margin: 7,
              borderRadius: 10,
              transform: [{
                scale
              }],
              opacity
            }}
          />
        })
      }
    </View>
  )
}

export default Indicator
