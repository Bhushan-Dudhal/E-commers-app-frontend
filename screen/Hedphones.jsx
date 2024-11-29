import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Hedphones = () => {
  return (
    <View>
      <Text style={styles.container}>Hedphones</Text>
    </View>
  )
}

export default Hedphones

const styles = StyleSheet.create({
  container: {
    height: 10,
    width:10
  }
})