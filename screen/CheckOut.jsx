import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Layout from '../components/Layout/Layout'

const CheckOut = ({navigation}) => {
    const handleCOD = () => {
        alert('Your Order Has Been Placed SuccessFully')
        
    }

    const handleOCDC = () => {
        alert("Your Redirecting to payment gateway")
        navigation.navigate('payment')
    }
    return (
    <Layout>
    <View style={styles.container}>
          <Text style={styles.heading}>Payment Options</Text>
          <Text style={styles.price}>Total Amount : 10010$</Text>
          <View style={styles.PaymentCard}>
              <Text style={styles.paymentHeading}>Select Your Payment Mode</Text>
              <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
                  <Text style={styles.paymentText}>Cash On Devlivery</Text>
              </TouchableOpacity>

                <TouchableOpacity style={styles.paymentBtn} onPress={handleOCDC}>
                  <Text style={styles.paymentText}>Online (CREDIT | DEBIT CARD)</Text>
              </TouchableOpacity>
          </View>
            </View>
            </Layout>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height:"90%",
        // marginTop:'20%'
    },
    heading: {
        fontSize: 30,
        fontWeight: '800',
      marginVertical:10,
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
        color:'gray'
    },
    PaymentCard: {
        backgroundColor:'#ffffff',
        width: '90%',
        borderRadius: 10,
        padding: 30,
        marginVertical:10
    },
    paymentHeading: {
        color: 'gray',
        marginBottom:10
    },
    paymentBtn: {
        backgroundColor: '#000000',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical:10,
    },
    paymentText: {
        color: '#ffffff',
        textAlign:'center'
    }
})

export default CheckOut
