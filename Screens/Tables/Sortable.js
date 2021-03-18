import React, { useState } from 'react'
import { View, ScrollView, TouchableHighlight } from 'react-native'
import { Table, Row, Cell, TableWrapper } from 'react-native-table-component'
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

const Sortable = () => {
  const [data, setData] = useState(tableData)
  const [orderIndex, setOrderIndex] = useState(null)

  const sortData = (i, order) => {
    const key = Object.keys(data.rows[i])[i]
    setOrderIndex(i)
    const sortedData = data.rows.sort((a, b) => {
      if (order === 'asc') {
        return b[key].localeCompare(a[key])
      } else {
        return a[key].localeCompare(b[key])
      }
    })

    setData(state => {
      return {
        ...state,
        rows: sortedData
      }
    })
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1}}>
      <ScrollView horizontal>
        <View style={{flex: 1}}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
            <TableWrapper style={{backgroundColor: '#ff9980', height: 40, flexDirection: 'row'}}>
              {
                data.columns.map((col, index) => (
                  <HeadCell 
                    key={index} 
                    sortData={sortData} 
                    orderIndex={orderIndex} 
                    col={col} 
                    index={index} 
                    data={data} />
                ))
              }
            </TableWrapper>
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

const HeadCell = ({col, sortData, index, data, orderIndex}) => {

  const [order, setOrder] = useState(null)

  const handleSort = () => {
    sortData(index, order)
    if(order === 'asc') {
      setOrder('desc')
    } else {
      setOrder('asc')
    }
  }

  return (
    <TouchableHighlight key={index} onPress={handleSort}>
      <View style={{flexDirection: 'row', padding: 6, width: data.widthArr[index], justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        <View style={{alignSelf: 'center'}}>
          <Cell 
            data={col}
            textStyle={{color: 'white'}} 
          />
        </View>
        <View style={{alignSelf: 'center'}}>
          {
            orderIndex === index && (
              <Ionicons name={order === 'asc' ? 'md-chevron-up' : 'md-chevron-down'} size={15} color='#fff' />
            )
          }
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default Sortable
