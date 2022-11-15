// Interfaces and types from component RadioItem

import { NativeSyntheticEvent, TargetedEvent } from "react-native";

// Component Props
type valueRadio = string | number;

/**
 * RadioItem props interface.
 *
 * @interface RadioItemProps
 * @since 3.0.0
 * @property {string} label The label of the radio item.
 * @property {valueRadio} value The value of the radio item.
 * @property {function} onPress The function to call when the radio item is pressed.
 * @property {function} onBlur The function to call when the radio item is blurred.
 * @property {boolean} isSelected The boolean to know if the radio item is selected.
 * @property {boolean} disabled The boolean to know if the radio item is disabled.
 */
export interface RadioItemProps {
  label: string;
  value: string | number;
  onPress?: (value: valueRadio) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  isSelected?: boolean;
  disabled?: boolean;
}
