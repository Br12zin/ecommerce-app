import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        textAlign: "left",
        color: colors.white,
        marginTop: 10,
        padding: 20,
        fontSize: 25
    },
    list:{
        alignSelf: "flex-start",
        marginLeft: 15
    }
});