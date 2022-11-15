import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    backgroundColor: "$palette.darkOpacity2",
    paddingVertical: 296
  },
  content: {
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-evenly",
    backgroundColor: "$palette.white",
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    flex: 1
  },
  title: {
    color: "$palette.darkPrimary",
    fontSize: 16,
    fontFamily: "regular"
  },
  body: {
    color: "$palette.gray9"
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 12
  },
  buttonPrimary: {
    alignItems: "center",
    backgroundColor: "$palette.darkPrimary",
    borderRadius: 8,
    padding: 6,
    flex: 1
  },
  buttonSecondary: {
    alignItems: "center",
    borderColor: "$palette.darkPrimary",
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    flex: 1
  },
  buttonTextPrim: {
    fontSize: 16,
    color: "$palette.white",
    fontFamily: "regular"
  },
  buttonTextSec: {
    fontSize: 16,
    color: "$palette.darkPrimary",
    fontFamily: "regular"
  }
});

export default styles;
