import React, { useCallback, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DraggableFlatList from 'react-native-draggable-flatlist'
import Ionicons from '@expo/vector-icons/Ionicons'

import { movies } from './data'
import { Button } from 'native-base'

const ListComponent = ({
    data = movies
  }) => {

  const [list, setList] = useState(data)

  const deleteItem = (item) => {
    setList(prev => {
      return prev.filter(listItem => listItem.id !== item.id)
    })
  }

  const renderItem = useCallback(
    ({ item, index, drag, isActive }) => {
      return (
        <TouchableOpacity
          style={{
            width: '100%',
            padding: 10,
            paddingRight: 20,
            justifyContent: 'center',
            backgroundColor: isActive ? '#ff9980' : 'white',
            position: isActive ? 'absolute' : 'relative',
            zIndex: 500
          }}
          onLongPress={() => {
            drag()
          }}
          >
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name='md-videocam' size={20} style={{marginRight: 10}} color={isActive ? 'white' : '#ff9980'} />
              <View style={{flex: 0.9}}>
                <Text
                  style={{
                    color: isActive ? 'white' : 'black',
                    fontSize: 13,
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginLeft: 20}} onPress={() => deleteItem(item)}>
              <Ionicons name='md-trash' size={20} color={isActive ? 'white' : '#ff9980'} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList 
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onDragEnd={({data}) => {
          setList(data)
        }}
        ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: '#ff9980'}}></View>}
      />
    </View>
  )
}

const Stack = createStackNavigator()
const ListScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="List" component={ListComponent} />
  </Stack.Navigator>
)

export default ListScreen
