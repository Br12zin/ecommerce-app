import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetail() {
    const {id} = useLocalSearchParams();

    return (
      <View>
        <Text>Product Detail - ID: {id}</Text>
      </View>
    )
}