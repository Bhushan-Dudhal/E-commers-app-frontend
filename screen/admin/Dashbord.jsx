import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Dashbord = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashbord</Text>
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.Btn}>
          <AntDesign style={styles.icon} name='shoppingcart'/>
          <Text style={styles.BntText}>Manage Product</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.Btn}>
          <AntDesign style={styles.icon} name='appstore1'/>
          <Text style={styles.BntText}>Manage Categories</Text>
        </TouchableOpacity>


         <TouchableOpacity style={styles.Btn}>
          <AntDesign style={styles.icon} name='user'/>
          <Text style={styles.BntText}>Manage Users</Text>
        </TouchableOpacity>


         <TouchableOpacity style={styles.Btn}>
          <AntDesign style={styles.icon} name='bars'/>
          <Text style={styles.BntText}>Manage Orders</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.Btn}>
          <AntDesign style={styles.icon} name='info'/>
          <Text style={styles.BntText}>About App</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    height: '96%',

    
  },
  heading: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    
  },
  BtnContainer: {
   margin: 15,
    
  },
  Btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor:'lightgray'
   
  },
  BntText: {
    fontSize: 16,
    fontWeight:'700'
  },
  icon: {
    fontSize: 20,
    marginRight: 20,
    marginLeft:10
  }

})
export default Dashbord
