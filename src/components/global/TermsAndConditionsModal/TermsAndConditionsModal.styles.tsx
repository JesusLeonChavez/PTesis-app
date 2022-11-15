import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    backgroundColor: "$palette.darkOpacity2",
    paddingVertical: 80
  },
  content: {
    borderRadius: 20,
    justifyContent: "space-evenly",
    backgroundColor: "$palette.white",
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 24,
    flex: 1
  },
  text: {
    color: "$palette.darkPrimary",
    fontSize: 18,
    textAlign: "center"
  },
  body: {
    fontSize: 14,
    textAlign: "center"
  },
  conditions: {
    alignItems: "center"
  }
});

export default styles;
