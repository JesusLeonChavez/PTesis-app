import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./CheckBox.styles";
import { CheckBoxProps as Props } from "./CheckBox.types";

import CheckWhiteIconSVG from "assets/images/icons/checkWhiteIcon.svg";

const CheckBox: React.FC<Props> = props => {
  const { customStyle, onPress } = props;
  const { active, error, disabled } = props;
  const { mode = "PRIMARY" } = props;

  const buttonPrimaryStyle = mode === "PRIMARY" ? styles.buttonPrimary : {};
  const buttonSecondaryStyle =
    mode === "SECONDARY" ? styles.buttonSecondary : {};

  const activePrimaryStyle =
    mode === "PRIMARY" && active ? styles.checkedPrimary : {};
  const activeSecondaryStyle =
    mode === "SECONDARY" && active ? styles.checkedSecondary : {};

  const disabledStyle = disabled ? styles.disabled : {};

  return (
    <View style={[customStyle, disabledStyle]}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => (onPress ? onPress(!active) : null)}
          disabled={disabled}
          style={[
            styles.button,
            buttonPrimaryStyle,
            buttonSecondaryStyle,
            activePrimaryStyle,
            activeSecondaryStyle
          ]}
        >
          {active ? <CheckWhiteIconSVG /> : null}
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default CheckBox;
