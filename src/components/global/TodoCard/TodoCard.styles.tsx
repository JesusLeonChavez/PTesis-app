import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    height: 56,
    borderRadius: 12,
    borderLeftWidth: 12,
    borderLeftColor: "$palette.primary",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: "$palette.lightPrimary",
    borderRightWidth: 1,
    borderRightColor: "$palette.lightPrimary",
    borderBottomWidth: 1,
    borderBottomColor: "$palette.lightPrimary",
    marginVertical: 4
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  checkbox: {
    borderWidth: 1,
    borderColor: "red"
  },
  data: {},
  description: {},
  date: {},
  modifiers: {
    flexDirection: "row",
    alignItems: "center"
  },
  importance: {
    width: 12,
    height: 12,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "yellow"
  },
  icon: {}
});

export default styles;
