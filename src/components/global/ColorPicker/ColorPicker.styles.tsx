import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  reset: {
    backgroundColor: "$palette.lightPrimary"
  },
  color: {
    width: 40,
    height: 40
  },
  container: {
    maxHeight: 80,
    justifyContent: "space-between",
    flex: 1
  }
});

export default styles;
