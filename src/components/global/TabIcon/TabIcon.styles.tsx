import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
    "@media ios": {
      marginTop: 16
    }
  },
  tabTextStyle: {
    fontFamily: "regular",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4
  },
  shoppingCartBadge: {
    backgroundColor: "$palette.primaryColor",
    borderRadius: 56,
    borderWidth: 1.6,
    borderColor: "$palette.white",
    position: "absolute",
    zIndex: 1,
    top: -8,
    right: -5
  },
  shoppingCartBadgeText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "$palette.white",
    fontSize: 11,
    fontFamily: "medium",
    paddingHorizontal: 5.6,
    paddingVertical: 1.2
  }
});

export default styles;
