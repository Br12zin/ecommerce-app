import { Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors';

export default function Index() {

    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{color: colors.black}}>index</Text>
      </View>
    );
}