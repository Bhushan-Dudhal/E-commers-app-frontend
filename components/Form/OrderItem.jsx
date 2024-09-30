import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({item}) => {
  return (
    <View style={styles.conntiner}>
            <View style={styles.oderInfo}>
                <Text style={styles.main}>Order Id : {item._id}</Text>
                <Text style={styles.main}>Order Date : {item.date}</Text>
                {/* <Text>Order Date : {item.date}</Text>
                <Text>Order Date : {item.date}</Text> */}
          </View>
          <Text style={styles.margin}>Product Name: {item.productInfo.name}</Text>
          <Text style={styles.margin}>Price: {item.productInfo.price}</Text>
          <Text style={styles.margin}>Quantity : {item.productInfo.qty}</Text>
          <Text style={styles.margin}>Total Amout: {item.totalAmout} $</Text>
          <Text style={styles.status}>Product status: {item.status }</Text>
       



    </View>
  )
}
const styles = StyleSheet.create({
    conntiner: { 
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 10,
        borderRadius: 7,
        elevation:10
        
    },
    oderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: 5,
        
    },
    status: {
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        fontWeight: '900',
        borderColor: 'lightgray',
        padding: 5,
        borderRadius:4
    },
    margin:{
        marginVertical: 7,
        fontWeight:'500'
    },
    main: {
        fontWeight:'700'
    }
}) 

export default OrderItem
