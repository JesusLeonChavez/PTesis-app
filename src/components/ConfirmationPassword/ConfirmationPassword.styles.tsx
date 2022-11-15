import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$palette.darkPrimary",
    padding: 16,
    justifyContent: "space-around"
  },
  containerForgot: {
    alignItems: "center"
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
  emailUser: {
    color: "$palette.primary",
    fontSize: 16,
    fontFamily: "regular"
  },
  button: {
    borderRadius: 64
  },
  textButton: {
    fontSize: 16,
    fontFamily: "regular"
  }
});

export default styles;
