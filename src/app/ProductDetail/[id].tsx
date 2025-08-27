import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { produtos } from '@//components/ProductList';

export default function ProductDetail() {
    const {id} = useLocalSearchParams();
    const product = produtos.find((p) => p.id === id);

    return (
      <View>
        <Text>Product Detail - ID: {id}</Text>
        {
          product ? (
            <Text>{product.name} - {'R$' + product.price.toFixed(2)}</Text>
          ) : (
            <Text>Produto não encontrado</Text>
          )
        }
      </View>
    )
}