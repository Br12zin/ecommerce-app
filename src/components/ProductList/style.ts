import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        textAlign: "left",
        color: colors.white,
        padding: 20,
        fontSize: 25
    },
    list:{
        marginLeft: 15,
        marginRight: 15
    }
});