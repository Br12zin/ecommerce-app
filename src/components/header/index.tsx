import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import {Feather} from "@expo/vector-icons"
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}>
        <Feather name="menu" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Logo</Text>
        <Feather name="shopping-cart"  style={styles.icon} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    padding: 10,
    paddingBottom: 15,
    justifyContent: "space-between",
    backgroundColor: colors.gray[600]
  },
  icon: {
    marginRight: 10,
    color: colors.white,
    fontSize: 25
    // borderRadius: 50,
    // borderWidth: 1,
    // borderColor: colors.gray[600],
    // backgroundColor: colors.gray[700]
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 18
  },
});