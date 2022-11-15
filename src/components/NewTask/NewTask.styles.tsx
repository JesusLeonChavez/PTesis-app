import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  input: {
    borderColor: "$palette.gray10",
    borderBottomWidth: 1
  },
  textInput: {
    color: "$palette.gray10"
  },
  containerPrioritys: {
    flexDirection: "row",
    alignContent: "flex-start"
  },
  containerPriorityButton: {
    marginLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "$palette.gray10",
    borderRadius: 8,
    padding: 8,
    alignItems: "center"
  },
  containerPriorityText: {
    marginLeft: 10
  },
  selected: {
    backgroundColor: "$palette.lightPurple"
  }
});

export default styles;
