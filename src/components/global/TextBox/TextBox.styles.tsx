import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  wrapper: {
    marginBottom: 24
  },
  labelContainer: {
    flexDirection: "row"
  },
  label: {
    width: "80%",
    color: "$palette.white",
    fontFamily: "regular",
    fontSize: 16,
    marginBottom: 4,
    paddingLeft: 10
  },
  optionalLabel: {
    width: "20%",
    color: "$palette.black1",
    fontFamily: "medium",
    fontSize: 12,
    marginBottom: 8,
    textAlign: "right",
    paddingRight: 4
  },
  textBoxWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "$palette.white"
  },
  textBoxWrapperError: {
    borderBottomWidth: 1,
    borderColor: "$palette.red2",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  textBox: {
    height: 48,
    paddingHorizontal: 10,
    flex: 1,
    fontSize: 14,
    color: "$palette.textBlack",
    fontFamily: "medium",
    backgroundColor: "transparent"
  },
  password: {
    paddingRight: 16
  },
  showPasswordWrapper: {
    paddingRight: 16,
    paddingLeft: 16
  },
  loaderWrapper: {
    paddingRight: 16,
    paddingLeft: 16
  },
  showPassword: {
    width: 22,
    tintColor: "$palette.black1"
  },
  showPasswordActive: {
    color: "$palette.primaryColor"
  },
  error: {
    color: "$palette.red2",
    fontFamily: "medium",
    fontSize: 12,
    marginTop: 4,
    paddingLeft: 10
  },
  disabled: {
    opacity: 0.4
  }
});
