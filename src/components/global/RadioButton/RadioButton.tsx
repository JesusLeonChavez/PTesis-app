import React from "react";
import { View } from "react-native";

import styles from "./RadioButton.styles";
import { RadioButtonProps as Props } from "./RadioButton.types";

import CheckWhiteIconSVG from "assets/images/icons/checkWhiteIcon.svg";

const RadioButton: React.FC<Props> = props => {
  const { isSelected, customStyle, mode = "check" } = props;
  const { customInnerStyle, customPointStyle } = props;

  const icon =
    mode === "check" ? (
      <CheckWhiteIconSVG />
    ) : (
      <View style={[styles.radioPoint, customPointStyle]} />
    );

  const iconStyle = mode === "check" ? styles.innerStyle : {};

  return (
    <View style={[styles.radio, styles.outerStyle, customStyle]}>
      {isSelected ? (
        <View style={[iconStyle, customInnerStyle]}>{icon}</View>
      ) : null}
    </View>
  );
};

export default RadioButton;
