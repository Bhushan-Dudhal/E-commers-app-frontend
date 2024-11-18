import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Tablet = () => {
  return (
    <View>
      <Text style={styles.newText}>Tablet</Text>
      <Text style={styles.text}>Tablet</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  text:{
   
  },
  newText: {
    fontSize:15
  }
})

export default Tablet
const style = StyleSheet.create({
  title: {
    height: 20,
    width:20
  }
})