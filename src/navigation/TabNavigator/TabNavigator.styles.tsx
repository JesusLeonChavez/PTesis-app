import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  tabNavigatorStyle: {
    height: "10%",
    backgroundColor: "$palette.tabBar",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  inactiveIcon: {
    paddingVertical: 4
  },
  activeIcon: {
    backgroundColor: "$palette.lightPurple",
    paddingHorizontal: 32,
    paddingVertical: 4,
    borderRadius: 20
  }
});

export default styles;
