// Interfaces and types from component TextBox

import { UseControllerProps } from "react-hook-form";
import { ColorValue, KeyboardTypeOptions } from "react-native";
import { ReturnKeyType, StyleProp } from "react-native";
import { TextStyle, ViewStyle } from "react-native";

/** Component Props.
 * @interface TextBoxProps
 * @since 4.0.1
 * @property {TextBoxType} type The type of the input.
 * @property {StyleProp<ViewStyle>} style The style of the container of the input.
 * @property {StyleProp<TextStyle>} labelStyle The style of the label text.
 * @property {string} label The label text.
 * @property {JSX.Element} icon The icon of the input.
 * @property {KeyboardTypeOptions} keyBoardType The type of the keyword to be used.
 * @property {string} placeholder The text of the placeholder.
 * @property {StyleProp<ViewStyle>} textBoxStyle The style of the TextBox.
 * @property {boolean} blurOnSubmit Attributes that enable blur.
 * @property {ReturnKeyType} returnKeyType The type of the key.
 * @property {function} onSubmitEditing The action to execute when user press OK in button.
 * @property {boolean} disabled Attribute to indicates if the input is disabled.
 * @property {number} maxLength The max number of chars in the input.
 * @property {boolean} multiline Indicates that input can has multiple lines.
 * @property {number} numberOfLines The number of lines allowed in the input.
 * @property {ColorValue} placeholderTextColor The color of the placeholder.
 * @property {boolean} optionalLabel Indicates if optional label has to bee show.
 * @property {function} onFocus The action to execute when user press on input.
 * @property {string} testID Name id to be used for testing.
 * @property {boolean} showLoader Attributes that indicates if the loader has to be show.
 */
export interface TextBoxProps extends UseControllerProps {
  type: TextBoxType;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
  label?: string;
  icon?: JSX.Element;
  keyBoardType?: KeyboardTypeOptions;
  placeholder?: string;
  textBoxStyle?: TextStyle;
  blurOnSubmit?: boolean;
  returnKeyType: ReturnKeyType;
  onSubmitEditing?: () => void;
  disabled?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  placeholderTextColor?: ColorValue;
  optionalLabel?: boolean;
  onFocus?: () => void;
  testID?: string;
  showLoader?: boolean;
  formatter?: (oldValue: string, newValue: string) => string;
}

/**
 * TextBox type.
 *
 * @since 3.0.0
 */
export type TextBoxType = "password" | "email" | "number" | "text";
