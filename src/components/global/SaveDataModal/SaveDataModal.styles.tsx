import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: "$palette.darkOpacity2",
    paddingVertical: 280,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  content: {
    borderRadius: 20,
    justifyContent: "space-evenly",
    backgroundColor: "$palette.white",
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 24,
    flex: 1,
    paddingVertical: 180
  },
  iconSVG: {
    alignItems: "center"
  },
  textTitle: {
    color: "$palette.darkPrimary",
    fontSize: 18,
    fontFamily: "bold",
    textAlign: "center"
  },
  text: {
    color: "$palette.gray10",
    fontSize: 12,
    textAlign: "center"
  },
  body: {
    fontSize: 14,
    textAlign: "center"
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  buttonCancel: {
    backgroundColor: "transparent",
    borderColor: "$palette.primary",
    borderWidth: 1,
    borderRadius: 12
  },
  textCancel: {
    color: "$palette.primary"
  },
  buttonOk: {
    borderColor: "$palette.primary",
    borderWidth: 1,
    borderRadius: 12
  }
});

export default styles;
