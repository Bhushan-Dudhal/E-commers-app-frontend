import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CategoriesData } from '../../data/CategoriesData'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const Categery = () => {
const navigation = useNavigation();

  return (
    <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.contaner}>
      {CategoriesData?.map((val) => (
        <View key={val._id} >
          <TouchableOpacity style={styles.Catcontaner}
            
            onPress={() => navigation.navigate(val.path)}
          
          >
            <AntDesign name={val.icon } style={styles.Caticon} />
            <Text style={styles.Cattitle}>{val.name}</Text>
             
         </TouchableOpacity>
      </View>
    ))}
      </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  contaner: {
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'row',
    
  },
  Catcontaner: {
    padding: 15,
    justifyContent: 'center',
    alignItems:'center'
  },
  Caticon: {
    fontSize: 30,
    verticalAlign:'top'
  },
  Cattitle: {
    fontSize:12
  }
})


export default Categery
