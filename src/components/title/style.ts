import colors from "@//styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
  title: {
    fontSize: 24,
    alignSelf: "center",
    fontWeight: "bold",
    color: colors.white,
    textAlign: "left",
    marginVertical: 20,
  },
});