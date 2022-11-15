// Fonts utilities
import * as Font from "expo-font";

const customFonts = {
  light: require("assets/fonts/Poppins-Light.otf"),
  regular: require("assets/fonts/Poppins-Regular.otf"),
  medium: require("assets/fonts/Poppins-Medium.otf"),
  bold: require("assets/fonts/Poppins-Bold.otf")
};

export const loadFonts = async () => {
  await Font.loadAsync(customFonts);
};
