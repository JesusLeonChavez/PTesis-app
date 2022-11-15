import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "$palette.purpleBackdrop",
    width: 360,
    height: 48,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "$palette.black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 7
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  image: {
    width: 20,
    height: 16
  },
  chevron: {
    width: 8,
    height: 12
  },
  name: {
    fontSize: 14,
    fontWeight: "500"
  },
  quantity: {
    fontSize: 14,
    color: "$palette.primary"
  }
});

export default styles;
