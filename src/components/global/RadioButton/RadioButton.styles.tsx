import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  radio: {
    justifyContent: "center",
    alignItems: "center"
  },
  innerStyle: {
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
    padding: 4,
    backgroundColor: "$palette.red1",
    alignItems: "center",
    justifyContent: "center"
  },
  outerStyle: {
    borderColor: "$palette.gray3",
    width: 32,
    height: 32,
    borderRadius: 100 / 2,
    borderWidth: 1
  },
  radioPoint: {
    width: 10,
    height: 10,
    borderRadius: 100 / 2,
    backgroundColor: "$palette.black"
  }
});
