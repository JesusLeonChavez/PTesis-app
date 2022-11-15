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
  text: {
    color: "$palette.white",
    fontSize: 16,
    fontFamily: "regular"
  },
  label: {
    color: "$palette.white",
    fontSize: 16,
    fontFamily: "regular",
    marginTop: 24
  },
  input: {
    marginTop: 24,
    marginBottom: 16,
    borderBottomColor: "$palette.white",
    borderBottomWidth: 1
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
  }
});

export default styles;
