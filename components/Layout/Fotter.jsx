import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRoute,useNavigation } from '@react-navigation/native';
import { userReduxStateHook } from '../../hook/customeHook';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/userAction';

const MenuFotter = () => {
  const routes = useRoute();
  const navigation = useNavigation()
  const dispatch =useDispatch()
  
  const loading =userReduxStateHook(navigation,"login")
 
   return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('home')}>
        <AntDesign style={[styles.icon,routes.name ==="home"&&styles.active]}  name='home' />
        <Text style={[styles.iconText,routes.name ==="home"&&styles.active]}>Home</Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('notification')}>
        <AntDesign style={[styles.icon,routes.name ==="notification"&&styles.active]}  name='bells' />
        <Text style={[styles.iconText,routes.name ==="Mobile"&&styles.active]}>Notifacation</Text>
     </TouchableOpacity>


       <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('account')}>
        <AntDesign style={[styles.icon,routes.name ==="account"&&styles.active]}  name='user' />
        <Text style={[styles.iconText,routes.name ==="account"&&styles.active]}>Account</Text>
     </TouchableOpacity>


       <TouchableOpacity style={styles.menuContainer} onPress={()=>navigation.navigate('cart')}>
        <AntDesign style={[styles.icon,routes.name ==="cart"&&styles.active]}  name='shoppingcart' />
        <Text style={[styles.iconText,routes.name ==="cart"&&styles.active]}>Cart</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.menuContainer} onPress={() => {
      dispatch(logout())
      }}>
        <AntDesign style={[styles.icon,routes.name ==="logout"&&styles.active]}  name='logout' />
        <Text style={[styles.iconText,routes.name ==="logout"&&styles.active]} >Logout</Text>
     </TouchableOpacity>
      

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10,
},
menuContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
    color:'#000000'
  },
  iconText: {
    fontSize: 11,
    color:'#000000'

  },
  active: {
    color: 'blue',
    fontWeight:'900'
  }

})

export default MenuFotter
