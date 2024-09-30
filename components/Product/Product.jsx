import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { ProductData } from '../../data/ProductData'

const Product1 = () => {
  return (
      <ScrollView>
          {ProductData.map((p) => (
              <ProductCard key={p._id} p={p } />
              
          ))}
    </ScrollView>
  )
}

export default Product1

const styles = StyleSheet.create({})