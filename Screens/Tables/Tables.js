import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import Basic from './Basic'
import Sortable from './Sortable'

const Tab = createBottomTabNavigator()
const Tables = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Basic') {
              iconName = focused
                ? 'md-grid'
                : 'md-grid-outline';
            } else if (route.name === 'Sortable') {
              iconName = focused 
                ? 'md-filter' 
                : 'md-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff9980',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Basic" component={Basic} options={{title: 'Basic'}} />
        <Tab.Screen name="Sortable" component={Sortable} options={{title: 'Sortable'}} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tables
