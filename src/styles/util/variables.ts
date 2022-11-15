import { Dimensions } from "react-native";

export const $palette = {
  darkPrimary: "hsla(252, 44%, 17%, 1)",
  primary: "hsla(278, 30%, 74%, 1)",
  lightPurple: "hsla(258, 100%, 87%, 1)",
  black: "hsla(0, 0%, 0%, 1)",
  white: "hsla(0, 0%, 100%, 1)",
  // Global
  primaryColor: "hsla(278, 30%, 74%, 0.5)",
  lightPrimary: "hsla(300, 19%, 95%,1)",
  tabBar: "hsla(315, 100%, 99%, 1)",
  gray1: "hsla(14, 16%, 96%, 1)",
  gray2: "hsla(0, 0%, 89%, 1)",
  gray3: "hsla(0, 0%, 61%, 1)",
  gray4: "hsla(240, 5%, 47%,1)",
  gray5: "hsla(0, 0%, 89%,1)",
  gray6: "hsla(0, 0%, 64%, 1)",
  gray7: "hsla(156, 2%, 47%,1)",
  gray8: "hsla(0, 0%, 73%,1)",
  gray9: "hsla(0, 0%, 42%, 1)",
  gray10: "hsla(270, 4%, 47%, 1)",
  red1: "hsla(349, 100%, 45%, 1)",
  red2: "hsla(0, 79%, 63%, 1)",
  facebookPrimary: "hsla(212, 80%, 42%, 1)",
  black1: "hsla(0, 0%, 0%, 0.3)",
  black2: "hsla(270, 8%, 15%, 1)",
  black3: "hsla(0, 1%, 14%,1)",
  green: "hsla(112, 68%, 67%, 1)",
  teal: "hsla(171, 39%, 72%, 1)",
  purpleBackdrop: "hsla(300, 19%, 95%, 0.96)",
  // Text
  textBlack: "hsla(270, 8%, 15%, 1)",
  textBlack2: "hsla(225, 6%, 13%, 1)",
  textGray: "hsla(0, 0%, 64%, 1)",
  textGray2: "hsla(0, 0%, 29%, 1)",
  textGray3: "hsla(0, 0%, 33%,1)",
  textGray4: "hsla(0, 0%, 61%, 1)",
  // Opacity
  darkOpacity: "hsla(0, 0%, 0%, 0.4)",
  darkOpacity2: "hsla(0, 0%, 0%, 0.15)",
  darkOpacity3: "hsla(0, 0%, 0%, 0.5)",
  grayOpacity: "hsla(14, 16%, 96%, 0.5)"
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const $sizes = {
  minWidth: screenWidth,
  maxWidth: screenWidth,
  minHeight: screenHeight
};

const variables = { $palette, $sizes };

export default variables;
