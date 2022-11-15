import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "$palette.primary",
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: "row"
  },
  textButton: {
    textAlign: "center"
  },
  primaryButton: {
    backgroundColor: "$palette.primary"
  },
  secondaryButton: {
    backgroundColor: "$palette.white",
    borderWidth: 1,
    borderColor: "$palette.primary"
  },
  primaryText: {
    color: "$palette.white"
  },
  secondaryText: {
    color: "$palette.primary"
  },
  iconWrapper: {
    paddingHorizontal: 8
  }
});

export default styles;
