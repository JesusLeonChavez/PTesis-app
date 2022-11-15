import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  header: {
    backgroundColor: "$palette.white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    height: 72
  },
  titleContainer: {
    alignItems: "center"
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    width: "15%"
  },
  rightContainer: {
    alignItems: "flex-end",
    paddingRight: 16,
    width: "15%"
  },
  primaryTextContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  primaryTextStyle: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "bold",
    color: "$palette.textBlack"
  },
  hitSlop: {
    top: 15,
    left: 15,
    bottom: 15,
    right: 15
  },
  leftButton: {
    alignItems: "center",
    flexDirection: "row"
  }
});
