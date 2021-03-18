import React from 'react'
import { View, ScrollView } from 'react-native'
import { Table, Row, Cell, TableWrapper } from 'react-native-table-component'

const data = {
  rows: [
    {
      name: 'Sarah Brown',
      age: '31',
      address: '100 Broadway St., New York City, New York'
    },
    {
      name: 'Jane Smith',
      age: '33',
      address: '100 Market St., San Francisco, California'
    },
    {
      name: 'Joe Black',
      age: '38',
      address: '100 Macquarie St., Sydney, Australia'
    },
  ],
  columns: [
    "Name",
    "Age",
    "Address",
  ],
  widthArr: [120, 60, 260]
}

const Basic = () => {

  return (
    <View style={{ backgroundColor: 'white', flex: 1}}>
      <ScrollView horizontal>
        <View style={{flex: 1}}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
            <TableWrapper style={{backgroundColor: '#ff9980', height: 40, flexDirection: 'row'}}>
              {
                data.columns.map((col, index) => (
                  <Cell 
                    key={index}
                    style={{flex: 1}}
                    data={col} 
                    textStyle={{margin: 6, color: 'white'}} 
                    width={data.widthArr[index]}
                  />
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

export default Basic
