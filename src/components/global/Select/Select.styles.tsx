import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  mainContainer: {
    marginBottom: 24
  },
  label: {
    fontFamily: "regular",
    fontSize: 14,
    lineHeight: 18,
    color: "$palette.textBlack",
    marginBottom: 4,
    paddingLeft: 10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: "$palette.gray1",
    paddingHorizontal: 12
  },
  textInput: {
    fontSize: 16,
    color: "$palette.textBlack",
    fontFamily: "medium"
  },
  contentContainer: {
    paddingHorizontal: 24
  },
  modalShadow: {
    shadowColor: "$palette.gray4",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 7,

    "@media android": {
      backgroundColor: "$palette.darkOpacity2",
      borderRadius: 16
    }
  },
  backgroundStyle: {
    "@media android": {
      marginTop: 4
    }
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    "@media android": {
      paddingVertical: 12
    },
    "@media ios": {
      paddingVertical: 16
    }
  },
  itemText: {
    fontFamily: "regular",
    fontSize: 16,
    lineHeight: 20,
    color: "$palette.textBlack",
    marginLeft: 16
  },
  customRadioStyle: {
    width: 20,
    height: 20
  },
  titleModal: {
    fontFamily: "medium",
    fontSize: 20,
    lineHeight: 18,
    color: "$palette.textBlack",
    paddingVertical: 24
  },
  opacity: {
    opacity: 0.4
  }
});

export default styles;
