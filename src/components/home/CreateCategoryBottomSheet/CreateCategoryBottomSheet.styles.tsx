import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  titleContainer: {
    alignItems: "center"
  },
  title: {
    color: "$palette.darkPrimary",
    fontSize: 16,
    fontFamily: "regular"
  },
  item: {
    paddingVertical: 12
  },
  colorsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    backgroundColor: "$palette.darkPrimary",
    borderRadius: 64,
    padding: 12,
    flex: 1
  },
  buttonText: {
    fontSize: 16,
    color: "$palette.white",
    fontFamily: "regular"
  }
});

export default styles;
