import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductData } from '../data/ProductData';
import { TouchableOpacity } from 'react-native';
import Layout from '../components/Layout/Layout';

const ProductDetails = ({route}) => {
  // console.log(route);
  const [pDetails, setProductDetails] = useState({})
  const [qty,setQty]=useState(1)
// get productb details
  useEffect(() => {
    const getProduct = ProductData.find((p) => {
      return p?._id === params._id;
    })
    setProductDetails(getProduct)
  },[ params?._id])


  const handleAddQty = () => {
    if(qty===10) return  alert('you cant add more than 10 quantity')
    setQty((prev)=>prev+1)
  }

  const handleRemoveQty = () => {
    if(qty<=1) return  
    setQty((prev)=>prev-1)
  }
  const { params } = route;
  
  return (
    <Layout>
      <Image style={styles.CardImage} source={{ uri: pDetails?.imageUrl }} /> 
      <View style={styles.container}>
        <Text style={styles.CardTitle}>{pDetails?.name}</Text>
      <Text style={styles.CardTitle}>Price:{pDetails?.price}</Text>
        <Text style={styles.CardDesc}>Price:{pDetails?.description}</Text>
        <View style={styles.BtnContainer}>
          <TouchableOpacity style={styles.Btn} onPress={()=>alert(`${qty} Items Added To Cart`)} disabled={pDetails?.quantity<=0}>
            <Text style={styles.BtnCartText}>
              {
                pDetails?.quantity>0?'ADD TO CART':'OUT OF STOCK'
              }
            </Text>
          </TouchableOpacity>
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
      </View>
   </Layout>
  )
}
const styles = StyleSheet.create({
  CardImage: {
    height: 300,
    width:'100%'
  },

   container: {
     marginVertical: 15,
     marginHorizontal:10,
  },
  CardTitle: {
    fontSize: 18,
    textAlign:'center'
  },
  CardDesc: {
    fontSize: 14,
    marginVertical: 10,
    textAlign:'center'
    
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal:10,
    
  },
  Btn: {
    width: 180,
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 40,
    justifyContent:'center'
     
     
  },
  BtnCartText: {
    color: "#ffffff",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    
    
  },
  BtnOty: {
    backgroundColor: 'lightgray',
    width: 40,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    padding: 6,
    fontSize: 20,
    borderRadius:5
  },
  BtnOtyText: {
    fontSize: 17,
    fontWeight:"500"
  },
  BtnA: {
    
  }
 
})


export default ProductDetails
