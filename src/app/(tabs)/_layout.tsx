import { Tabs } from "expo-router";
import colors from "../../styles/colors";
import {Feather} from "@expo/vector-icons"


export default function TabsLayout() {
    return (
            <Tabs 
                screenOptions={{
                headerShown: false, //esconde o cabeçalho padrão
                tabBarShowLabel: false, //esconde o texto abaixo dos ícones
                tabBarActiveTintColor: colors.gray[100], //cor do ícone ativo
                tabBarInactiveTintColor: colors.gray[400], //cor do ícone inativo
                tabBarStyle: {
                    //estilo da barra de navegação
                    backgroundColor: colors.gray[800], //cor de fundo
                    borderTopColor: colors.gray[400], //cor da borda superior
                    paddingTop: 10,
                    height: 80
                },
        }}
        >
            {/* define a ordem do q aparece dentro da tela */}
            <Tabs.Screen name="index" options={{ 
                tabBarIcon:({color, size}) => (
                <Feather name="home" color={color} size={size} />
            )
            }}
            />
            <Tabs.Screen name="wishlist" options={{ //cor e tamanho são passados automaticamente pelo tabBarStyle
                tabBarIcon:({color, size}) => (
                <Feather name="heart" color={color} size={size} />
            )
            }}
            />
            <Tabs.Screen name="cart" options={{
                tabBarIcon:({color, size}) => (
                <Feather name="shopping-bag" color={color} size={size} />
            )
            }}
            />
            <Tabs.Screen name="profile" options={{
                tabBarIcon:({color, size}) => (
                <Feather name="user" color={color} size={size} />
            )
            }}
            />
            </Tabs>
    );
}