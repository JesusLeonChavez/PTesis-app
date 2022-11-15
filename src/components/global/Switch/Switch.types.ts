// Interfaces and types from component Switch

import { StyleProp, ViewStyle } from "react-native";

/**
 * Switch props interface.
 * @interface SwitchProps
 * @since 3.0.0
 * @property {boolean} active Determines whether the switch is active or not.
 * @property {boolean} disabled Determines whether the switch is disabled or not.
 * @property {function} onPress Callback function to be called when the switch is pressed.
 * @property {StyleProp<ViewStyle>} customStyle Custom style for the switch.
 */
export interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  onPress: () => void;
  customStyle?: StyleProp<ViewStyle>;
}
