import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const Notification = () => {
  return (
      <Layout>
          
          <View style={styles.container}>
              
         <Text>Oops !  You dont have any notification  yet</Text>
              
          </View>
    </Layout>
  )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign:'center'
  },
  noti: {
    
  }
})
export default Notification

