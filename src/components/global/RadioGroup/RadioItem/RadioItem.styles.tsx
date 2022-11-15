import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 16
  },
  answerName: {
    fontFamily: "regular",
    fontSize: 16,
    color: "$palette.black1"
  }
});

export default styles;
