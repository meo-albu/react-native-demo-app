import React, { useRef, useState } from 'react'
import { View, FlatList, Dimensions, Animated } from 'react-native'
import Image from './Image'
import Indicator from './Indicator'

const {width} = Dimensions.get('screen')

const imageWidth = width
const imageHeight = imageWidth / 1.5


const Carousel = ({
    images
  }) => {

  const [index, setIndex] = useState()
  const scrollX = useRef(new Animated.Value(0)).current
  const carouselRef = useRef()

  const scrollTo = (to) => {
    carouselRef.current.scrollToOffset({offset: to})
  }

  return (
    <View style={{backgroundColor: '#856582'}}>
      <FlatList
        ref={carouselRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        alwaysBounceHorizontal
        pagingEnabled
        renderItem={({item}) => (
          <Image uri={item} width={imageWidth} height={imageHeight} />
        )}
      />
      <Indicator images={images} scrollTo={scrollTo} scrollX={scrollX} width={imageWidth} />
    </View>
  )
}

export default Carousel
