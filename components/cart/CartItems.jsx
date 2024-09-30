import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const CartItems = ({ item }) => {

  const [qty,setQty]=useState(1)


     const handleAddQty = () => {
    if(qty===10) return  alert('you cant add more than 10 quantity')
    setQty((prev)=>prev+1)
  }

  const handleRemoveQty = () => {
    if(qty<=1) return  
    setQty((prev)=>prev-1)
  }

  return (
      <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item?.imageUrl }} />
          <View>
           <Text style={styles.name}>{item?.name}</Text>
           <Text style={styles.name}>Price : {item?.price}</Text>
    </View>

 <View style={styles.BtnContainer}>
            <TouchableOpacity onPress={handleRemoveQty}>
              <Text style={styles.BtnOty}>-</Text>
            </TouchableOpacity>
            <Text style={styles.BtnOtyText}>{qty }</Text>
             <TouchableOpacity onPress={handleAddQty}>
              <Text style={styles.BtnOty}>+</Text>
            </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    alignItems: 'center',
        elevation:7
        
        
    },
    image: {
        height: 100,
        width:100,
    },
    name: {
        fontSize:13,
        fontWeight:'500'
    },
    BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 7,
    // marginHorizontal:10,
    
    },
     BtnOty: {
    backgroundColor: 'lightgray',
    width: 20,
    alignItems: 'center',
    textAlign: 'center',
    // marginHorizontal: 4,
    padding: 5,
    fontSize: 20,
         borderRadius: 5,
    
    },
    BtnOtyText: {
        margin: 5,
        fontWeight:'600'
     }
})

export default CartItems
