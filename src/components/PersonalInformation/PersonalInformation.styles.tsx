import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "$palette.white",
    padding: 16,
    justifyContent: "space-evenly"
  },
  MainTitleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  MainTitleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  MainTitle: {
    color: "$palette.black",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  imageContainer: {
    alignSelf: "center"
  },
  profileImage: {
    top: 15,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "$palette.gray1",
    borderWidth: 10,
    borderColor: "$palette.white"
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: "center"
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "$palette.gray1",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  editIcon: {
    color: "#DFD8C8",
    size: 48,
    width: 35,
    height: 35
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10
  },
  PersonalInfo: {
    marginTop: 5,
    fontSize: 32
  },
  labelText: {
    marginLeft: 10,
    color: "$palette.black"
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    color: "#05375a",
    borderBottomColor: "$palette.black",
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: "#6750A4",
    padding: 18,
    marginBottom: 12,
    borderRadius: 40
  },
  text: {
    color: "$palette.white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  }
});
export default styles;
