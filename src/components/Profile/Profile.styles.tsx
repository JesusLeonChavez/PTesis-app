import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$palette.white",
    padding: 16,
    justifyContent: "space-evenly"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  titlebox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  title: {
    color: "$palette.black",
    textAlign: "center",
    fontSize: 24
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  user: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    paddingHorizontal: 16
  },
  name: {
    fontSize: 20,
    color: "$palette.black",
    fontFamily: "regular",
    lineHeight: 30
  },
  date: {
    fontSize: 14,
    color: "$palette.black",
    fontFamily: "light"
  },
  ItemContainer: {
    flex: 1
  },
  LineSeparator: {
    marginBottom: 10,
    marginTop: 10,
    color: "$palette.black",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  ListItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8
  },
  ListItemInnerContentView: {
    paddingHorizontal: 8,
    justifyContent: "center"
  },
  TextStyles: {
    color: "$palette.darkPrimary",
    fontSize: 15,
    fontFamily: "regular",
    fontWeight: "400"
  }
});
export default styles;
