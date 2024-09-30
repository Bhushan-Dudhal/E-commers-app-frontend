import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { OrderData } from '../../data/OrderData'
import OrderItem from '../../components/Form/OrderItem'

const MyOrder = () => {
  return (
    <Layout>
      <View style={styles.conainert}>
        <Text style={styles.hedding}>My Order</Text>
        <ScrollView>
          {
            OrderData.map((item) => (
              <OrderItem key={item.id} item={item} /> 
            ))
          }
        </ScrollView>
   </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  conainert: {
marginTop:10,
  },

  hedding: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: '900',
    fontSize: 20,
    
  }
})
export default MyOrder
