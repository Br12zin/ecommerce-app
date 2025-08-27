import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Header from '../components/header';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        screenOptions={{
          header: () => <Header />,
          drawerActiveTintColor: colors.gray[100],
          drawerInactiveTintColor: colors.gray[400],
          drawerStyle: {
          backgroundColor: colors.gray[800],
          width: 270,
        },
      }}>
      <Drawer.Screen name = "(tabs)"
      options={{
        title: "Home",
        drawerIcon: ({color, size}) => (
          <Feather name="home" color={color} size={size} />
        )
      }}
      />
      <Drawer.Screen name = "category/index"
      options={{
        title: "Categorias",
        drawerIcon: ({color, size}) => (
          <Feather name="grid" color={color} size={size} />
        )
      }}
      />
      <Drawer.Screen name = "ProductDetail/[id]"
      options={{
        title: "Produtos",
        drawerIcon: ({color, size}) => (
          <Feather name="box" color={color} size={size} />
        )
      }}
      />
      </Drawer>
    </GestureHandlerRootView>
  );
}
