import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$palette.darkPrimary",
    padding: 16,
    justifyContent: "space-evenly"
  },
  title: {
    color: "$palette.white",
    fontSize: 32,
    fontFamily: "bold"
  },
  containerInputs: {
    justifyContent: "space-evenly"
  },
  label: {
    color: "$palette.white",
    fontSize: 16,
    fontFamily: "regular"
  },
  input: {
    color: "$palette.white"
  },
  forget: {
    backgroundColor: "transparent"
  },
  forgetText: {
    color: "$palette.teal",
    fontSize: 12,
    fontFamily: "regular",
    alignSelf: "flex-end"
  },
  buttonNormal: {
    alignItems: "center",
    backgroundColor: "$palette.primary",
    borderRadius: 64,
    padding: 12,
    marginBottom: 16,
    marginTop: 16
  },
  textNormal: {
    color: "$palette.white",
    fontSize: 16,
    fontFamily: "regular"
  },
  containerWithRegister: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  text: {
    color: "$palette.white",
    fontSize: 12,
    fontFamily: "regular"
  },
  register: {
    backgroundColor: "transparent"
  },
  registerText: {
    color: "$palette.teal",
    fontSize: 12,
    fontFamily: "regular"
  }
});

export default styles;
