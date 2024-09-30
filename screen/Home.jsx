import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categery from '../components/categery/Categories'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import Product from '../components/Product/Product'
import Product1 from '../components/Product/Product'
import Header from '../components/Header'


const Home = () => {
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
 
})