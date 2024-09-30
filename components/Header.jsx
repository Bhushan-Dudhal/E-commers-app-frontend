import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const [search, setSearch] = useState("")
  
  const searchHandle = () => {
    console.log(search)
    setSearch("")
  }
  return (
    <View style={styles.contaner}>
      <View style={styles.main}>
         <TextInput style={styles.input} value={search} onChangeText={(text)=>setSearch(text)} placeholder='Search  ' />
      <TouchableOpacity style={styles.searchBtn} onPress={searchHandle}>
      
        <FontAwesome  style={styles.icon} name="search"/>
     
      </TouchableOpacity>
            
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  contaner: {
    height: 90,
    backgroundColor:"lightgray"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: 'black',
    borderWidth: 0.3,
   
    borderRadius: 5,
    fontSize: 20,
    fontWeight: '900',
    position: 'absolute',
    left: 15,
    backgroundColor: '#ffffff',
    color:'#000000',
    paddingLeft: 10,
    
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:15
  },
  searchBtn: {
    position: 'absolute',
    left:'96%'
    
  },
  icon: {
    fontSize: 20,
    color:'#000000'
  }
})