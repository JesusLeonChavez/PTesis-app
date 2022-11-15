import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    height: 24,
    width: 40,
    alignItems: "center",
    flexDirection: "row",
    padding: 3,
    backgroundColor: "$palette.gray3",
    borderRadius: 40
  },
  active: {
    backgroundColor: "$palette.black"
  },
  ball: {
    backgroundColor: "$palette.white",
    height: 18,
    width: 18,
    borderRadius: 36
  },
  disabled: {
    opacity: 0.5
  }
});

export default styles;
