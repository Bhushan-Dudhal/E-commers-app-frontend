import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ p }) => {
  const navigation = useNavigation()
  
  //more datails btn

  const handleMoreButton = (id) => {
    navigation.navigate('ProductDetails',{_id:id});
    // console.log(id);
  
    
  }

  //Add To Cart

    const handleAddToCart = () => {
      alert(' added to  cart');
    }
  return (
    <ScrollView style={styles.main}>
      <View style={styles.card}>
        <Image style={styles.Cardimage}  source={{uri:p?.imageUrl}}/>
        <Text style={styles.CardTitle}>{p?.name}</Text>
        <Text style={styles.CardDesc}>{p?.description.substring(0,20)}...more</Text>
        {/* <Text>{p?.price}</Text> */}
        <View style={styles.BtnContainer}>
          <TouchableOpacity style={styles.btn} onPress={()=>handleMoreButton(p._id)}>
           <Text style={styles.btnText}>  Details</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.btnCard}  onPress={handleAddToCart}>
           <Text style={styles.btnText}>Add To  Card</Text>
          </TouchableOpacity>
        </View>
        
        
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  card: {
     borderColor: 'lightgray',
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 8,
    width: '45%',
    padding: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
     
    
  },

  main: {
    display: "flex",
  },
  Cardimage: {
    height: 120,
    width: '100%',
    // borderColor: 'black',
    // borderWidth: 1,
    marginBottom:10
  },
  CardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    
    
  },
  CardDesc: {
    fontSize: 13 ,
    textAlign:'left',
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    
    
  },
  btn: {
    backgroundColor: '#000000',
    height: 25,
    width: 70,
    borderRadius: 5,
  justifyContent:'center',
  
  },
    btnCard: {
    backgroundColor: 'orange',
    height: 25,
    width: 70,
    borderRadius: 5,
      justifyContent: 'center',
  marginLeft:4
  
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
    fontWeight:'bold '
  }
})


export default ProductCard
