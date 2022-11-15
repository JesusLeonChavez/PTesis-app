// Interfaces and types from component RadioButton

import { StyleProp, ViewStyle } from "react-native";

/**
 * RadioButton props interface.
 *
 * @interface RadioButtonProps
 * @since 3.0.0
 * @property {boolean} isSelected Attributes that determine the selected state of the radio button.
 * @property {StyleProp<ViewStyle>} customStyle Custom style for the component.
 * @property {RadioButtonMode} mode The mode of the radio button.
 * @property {StyleProp<ViewStyle>} customInnerStyle The custom inner style.
 * @property {StyleProp<ViewStyle>} customPointStyle The custom point style.
 */
export interface RadioButtonProps {
  isSelected: boolean;
  customStyle?: StyleProp<ViewStyle>;
  mode?: RadioButtonMode;
  customInnerStyle?: StyleProp<ViewStyle>;
  customPointStyle?: StyleProp<ViewStyle>;
}

type RadioButtonMode = "check" | "point";
