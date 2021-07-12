import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import colors from "@/resources/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  mainView: {
    flexGrow: 1,
    paddingTop: RFValue(60),
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: RFValue(20)
  },
  setMargin: {
    marginTop: 15
  },
  textInputStyle: {
    height: RFValue(45),
    paddingHorizontal: 20,
    fontSize: RFValue(15),
    marginTop: 5,
    borderRadius: 5,
    borderColor: colors.mediumGrey,
    borderWidth: 1
  },
  btnView: {
    marginVertical: 20
  },
  textStyle1: {
    //   forgot password, privacy policy
    fontWeight: "bold",
    fontSize: RFValue(14)
  },
  flexRowView: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  linkStyle: {
    fontSize: RFValue(14),
    color: colors.primaryBlue
  }
});
