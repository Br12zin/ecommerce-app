import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    ProductItem:{
    padding: 16,
    backgroundColor: colors.gray[400],
    borderRadius: 12,
    marginRight: 12,
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 12,
        alignSelf: "center"
    },
    title:{
        maxWidth: 100, //limita o tamanho do texto dentro do card para não quebrar a imagem, ele joga o texto para baixo
        fontSize: 16,
        fontWeight: "bold",
        color: colors.black,
        marginTop:5
    }
});