import { View } from "react-native";

import styles from "./CustomImage.styles";

import FourChartIconSVG from "assets/images/icons/fourSquaresIcon.svg";

//Images

const CustomImagePlaceholder = () => {
  return (
    <View style={styles.placeholderCommonImagePlaceholder}>
      <FourChartIconSVG style={styles.placeholderProductImageIcon} />
    </View>
  );
};

export default CustomImagePlaceholder;
