import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  textError: {
    paddingBottom: 8,
    fontFamily: "regular",
    fontSize: 14,
    color: "$palette.primary"
  },
  labelContainer: {
    flexDirection: "row"
  },
  label: {
    width: "80%",
    color: "$palette.textBlack",
    fontFamily: "regular",
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 10
  }
});

export default styles;
