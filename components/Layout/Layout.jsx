import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header'
import MenuFotter from './Fotter'

const Layout = ({children}) => {
  return (
    
    <>
      <StatusBar backgroundColor={'orange'} />
      
          <View>
              {children}
      </View>
      <View style={styles.footer}>
          <MenuFotter/>

      </View>
        
          
    </>
  
  )
}
const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    width:'100%',
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 100,
    borderTopWidth: 1,
    borderColor:'lightgray',
    position: "absolute",
    bottom: 0,
   padding:10,
  }
})


export default Layout





