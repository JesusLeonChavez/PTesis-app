import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    marginLeft: 12,
    width: "90%"
  },
  error: {
    color: "$palette.primary",
    fontFamily: "regular",
    fontSize: 14,
    lineHeight: 14,
    marginTop: 8
  },
  button: {
    borderRadius: 2,
    borderColor: "$palette.gray3",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPrimary: {
    height: 30,
    width: 30
  },
  buttonSecondary: {
    height: 20,
    width: 20
  },
  checkedPrimary: {
    borderColor: "transparent",
    backgroundColor: "black"
  },
  checkedSecondary: {
    borderColor: "transparent",
    backgroundColor: "red"
  },
  disabled: {
    opacity: 0.5
  }
});
