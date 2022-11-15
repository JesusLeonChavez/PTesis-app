import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35
  },
  user: {
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    paddingHorizontal: 16
  },
  name: {
    fontSize: 24,
    color: "$palette.black",
    fontFamily: "regular",
    lineHeight: 30
  },
  date: {
    fontSize: 14,
    color: "$palette.black",
    fontFamily: "light"
  },
  searchIconWrapper: {
    position: "absolute",
    zIndex: 2,
    top: 16,
    left: 16
  },
  textInputWrapper: {
    marginTop: 16
  },
  input: {
    height: 50,
    borderRadius: 60,
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingLeft: 48,
    shadowColor: "$palette.gray4",
    backgroundColor: "$palette.white",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 7
  },
  emptyWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    paddingVertical: 12,
    fontSize: 14,
    color: "$palette.gray4",
    fontFamily: "light"
  },
  backdrop: {
    // FIXME: CHANGE COLOR WITH THE CORRECT TRANSPARENCY
    backgroundColor: "$palette.purpleBackdrop"
  },
  menuItem: {
    fontSize: 16,
    fontFamily: "regular",
    color: "$palette.gray10"
  },
  headerListContainer: {
    paddingTop: 16
  },
  headerListTitle: {
    fontSize: 14,
    fontWeight: "500"
  }
});

export default styles;
