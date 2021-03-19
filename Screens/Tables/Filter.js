import React, { useState } from 'react'
import { View, ScrollView, TextInput } from 'react-native'
import { Table, Row } from 'react-native-table-component'
import Ionicons from '@expo/vector-icons/Ionicons'

const tableData = {
  rows: [
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      startDate: "2008/11/28",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: "47",
      startDate: "2009/10/09",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "22",
      startDate: "2009/01/12",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      startDate: "2012/10/13",
    },
    {
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: "28",
      startDate: "2011/06/07",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      startDate: "2012/12/02",
    },
    {
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      age: "38",
      startDate: "2011/05/03",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21",
      startDate: "2011/12/12",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      age: "46",
      startDate: "2011/12/06",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "32",
      startDate: "2012/03/29",
    },
  ],
  columns: [
    "Name",
    "Position",
    "Office",
    "Age",
    "Start date",
  ],
  widthArr: [120, 200, 150, 60, 120]
}

const Filter = () => {
  const [data, setData] = useState(tableData)
  const [filter, setFilter] = useState('')

  const filterData = text => {
    setFilter(text)

    const dataToFilter = tableData.rows

    const filteredData = dataToFilter.map(row => {
      const newData = Object.keys(row).some(key => JSON.stringify(row[key]).toLowerCase().includes(text.toLowerCase()))
      return newData === true && row
    })

    setData(state => {
      return {
        ...state,
        rows: filteredData
      }
    })
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: '#F5F7FF', flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
        <Ionicons name='md-search' size={15} />
        <TextInput 
          placeholder="Filter data"
          style={{padding: 10, flex: 1}}
          value={filter}
          onChangeText={filterData}
        />
      </View>
      <ScrollView horizontal>
        <View style={{flex: 1}}>
          <Table>
            <Row data={data.columns} widthArr={data.widthArr} style={{backgroundColor: '#ff9980', height: 40}} textStyle={{margin: 6, color: 'white'}} />
            <ScrollView>
              {
                data.rows.map((row, index) => {
                  return (
                    <Row 
                      key={index}
                      widthArr={data.widthArr}
                      data={Object.values(row)}
                      textStyle={{margin: 6}}
                    />
                  )
                })
              }
            </ScrollView>
          </Table>
        </View>
      </ScrollView>
    </View>
  )
}

export default Filter
