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
  aaa: {
    color: "$palette.white"
  },
  buttonNormal: {
    alignItems: "center",
    backgroundColor: "$palette.primary",
    borderRadius: 64,
    padding: 12,
    marginBottom: 16,
    marginTop: 16
  },
  input: {
    color: "$palette.white"
  },
  textNormal: {
    color: "$palette.white",
    fontSize: 16,
    fontFamily: "regular"
  },
  containerWithSigIng: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  text: {
    color: "$palette.white",
    fontSize: 12,
    fontFamily: "regular"
  },
  sigIn: {
    backgroundColor: "transparent"
  },
  sigInText: {
    color: "$palette.teal",
    fontSize: 12,
    fontFamily: "regular"
  },
  termsAndConditions: {
    flexDirection: "row",
    alignItems: "center"
  },
  terms: {
    paddingHorizontal: 12,
    color: "$palette.white",
    fontSize: 12,
    fontFamily: "regular"
  },
  textButton: {
    color: "$palette.white",
    fontSize: 16,
    paddingVertical: 4
  },
  continueButton: {
    backgroundColor: "$palette.primary",
    borderRadius: 64
  }
});

export default styles;
