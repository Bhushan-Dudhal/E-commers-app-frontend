import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CartData } from '../data/CartData'
import PriceTable from '../components/cart/PriceTable'
import Layout from '../components/Layout/Layout'
import CartItems from '../components/cart/CartItems'
import { TouchableOpacity } from 'react-native'

const Cart = ({navigation}) => {
    const [cartItems,setCartItems]=useState(CartData)
  return (
    <Layout>
          <Text style={styles.heading}>
              {
                  cartItems?.length> 0 ? `You Have ${cartItems?.length} Item Left In Your Cart` : 'OOPS Your Cart Is EMPTY !'
              }
          </Text>
          {
              cartItems?.length && (
                  <>
                      <ScrollView>
                          {cartItems.map((item) => (
                              <CartItems key={item.id} item={item} />
                          ))}
                      </ScrollView>
                      
                      <View>
                        <PriceTable title={'Total Price '} price={900}/>
                        <PriceTable title={'Tax'} price={1}/>
                          <PriceTable title={'Shipping'} price={1} />
                          
                          <View style={styles.GrandTotal}>
                              
                          <PriceTable title={'Grand Total'} price={1001} />
                              
                              
                          </View>
                          <TouchableOpacity style={styles.BtnCheck} onPress={()=>navigation.navigate('checkout')}>
                              <Text style={styles.BtnCheckText}>CHECK OUT</Text>
                      </TouchableOpacity>

                    </View>
                  </>
              )
          }
    </Layout>
  )
}
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        color: 'green',
        marginTop:10 
    },
    GrandTotal: {
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: "#ffffff",
        padding: 5,
        margin: 5,
        marginHorizontal:20
    },
    BtnCheck: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#000000",
        width: '90%',
        marginHorizontal: 20,
        borderRadius:10
    },
    BtnCheckText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize:17,
    },
    title: {
        
    }
})


export default Cart
