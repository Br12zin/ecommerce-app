// style.ts
import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 12,
        alignItems: "center",  
    },
    ProductItem:{
        padding: 8,
        marginTop:10,
        backgroundColor: colors.gray[400],
        borderRadius: 10,
        elevation: 4
    },
    image:{
        width: 80,
        height: 80,
        borderRadius: 12,
        alignSelf: "center"
    },
    title:{
        maxWidth: 100,
        fontSize: 18,
        fontWeight: "bold",
        color: colors.white,
        marginTop:5
    },
    price:{
        maxWidth: 100,
        fontSize: 14,
        fontWeight: "bold",
        color: colors.gray[400],
    },
    details:{
        marginLeft: 12,
        marginTop: 4,
    },
    line:{
        height: 1,
        backgroundColor: "#eee",
        marginTop: 8,
        width: 340, // aqui vc controla o tamanho horizontal da linha
        alignSelf: "flex-start" // pode ser "center" se quiser centralizar
    }
});
