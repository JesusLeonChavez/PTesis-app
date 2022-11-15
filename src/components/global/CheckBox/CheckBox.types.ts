// Interfaces and types from component CheckBox

import { ReactNode } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

/**
 * Checkbox props interface.
 * @interface CheckBoxProps
 * @since 3.0.0
 * @property {StyleProp<ViewStyle>} customStyle Custom style for the component.
 * @property {string, ReactNode} text Text to display.
 * @property {StyleProp<TextStyle>} customTextStyle Custom style for the text.
 * @property {function} onPress Callback function to be called when the checkbox is pressed.
 * @property {boolean} active Attributes that indicates if the checkbox is active.
 * @property {string} error Error message.
 * @property {boolean} disabled Checkbox disabled state.
 * @property {CheckBoxMode} mode The mode of the checkbox.
 */
export interface CheckBoxProps {
  customStyle?: StyleProp<ViewStyle>;
  text?: string | ReactNode;
  customTextStyle?: StyleProp<TextStyle>;
  onPress?: (active: boolean) => void;
  active: boolean;
  error?: string;
  disabled?: boolean;
  mode?: CheckBoxMode;
}

type CheckBoxMode = "PRIMARY" | "SECONDARY";
