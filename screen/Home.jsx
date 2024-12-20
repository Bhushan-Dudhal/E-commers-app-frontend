import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Categery from '../components/categery/Categories'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import Product1 from '../components/Product/Product'
import Header from '../components/Header'
import { useSelector ,useDispatch} from 'react-redux'
import { getUserData } from '../redux/features/userAction'


const Home = () => {
  
  const  dispatch = useDispatch()
  const {isAuth, user } = useSelector((state) => state.user)
 console.log(user,isAuth);
 
  
  useEffect(() => {
    dispatch(getUserData())
  },[dispatch])
  return (
    <Layout>
      <Header/>
      <Categery />
      <Banner />
      <Product1/>
   </Layout>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
   fontSize:20
 }
})