import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$palette.darkPrimary",
    justifyContent: "space-evenly"
  },
  containerTitles: {
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    color: "$palette.white",
    padding: 8,
    fontFamily: "bold"
  },
  info: {
    fontSize: 16,
    color: "$palette.white",
    padding: 16,
    fontFamily: "regular"
  },
  containerButton: {
    justifyContent: "center",
    paddingHorizontal: 12
  },
  button: {
    alignItems: "center",
    backgroundColor: "$palette.primary",
    borderRadius: 64,
    padding: 12
  },
  buttonText: {
    fontSize: 16,
    color: "$palette.white",
    fontFamily: "regular"
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$palette.primary",
    borderRadius: 64,
    padding: 12,
    marginBottom: 16,
    marginTop: 16
  },
  loginText: {
    color: "$palette.white",
    fontFamily: "regular",
    fontSize: 16,
    marginLeft: 12
  },
  registerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$palette.black",
    borderColor: "$palette.white",
    borderWidth: 1,
    borderRadius: 64,
    padding: 12
  },
  registerText: {
    color: "$palette.white",
    fontFamily: "regular",
    fontSize: 16,
    marginLeft: 12
  }
});

export default styles;
