import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import About from '../screen/About';
import Laptop from '../screen/Laptop';
import Hedphones from '../screen/Hedphones';
import Tablet from '../screen/Tablet';
import Lcd from '../screen/Lcd';
import Macbook from '../screen/Macbook';
import ProductDetails from '../screen/ProductDetails';
import Cart from '../screen/Cart';
import CheckOut from '../screen/CheckOut';
import Payment from '../screen/Payment';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import Account from '../screen/account/Account';
import Notification from '../screen/account/Notification';
import Profile from '../screen/account/Profile';
import MyOrder from '../screen/account/MyOrder';
import Dashbord from '../screen/admin/Dashbord';
import {Provider} from "react-redux"
import store from '../redux/store';
const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Mobile" component={About} />
        <Stack.Screen name="Laptop" component={Laptop} />
        <Stack.Screen name="Headphones" component={Hedphones} />
        <Stack.Screen name="Tablet" component={Tablet} />
        <Stack.Screen name="Lcd" component={Lcd} />
        <Stack.Screen name="Macbook" component={Macbook} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={CheckOut} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="login" component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register}
          options={{ headerShown: false }} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="myoder" component={MyOrder} />
        <Stack.Screen name="adminPanel" component={Dashbord} />

      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

export default index

const styles = StyleSheet.create({})