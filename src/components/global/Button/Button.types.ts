// Interfaces and types from component Button
import { ReactNode } from "react";
import { TouchableOpacityProps as RNButtonProps } from "react-native";
import { ColorValue } from "react-native";
import { ViewStyle } from "react-native";
import { StyleProp, TextStyle } from "react-native";

/**
 * Button props.
 *
 * @interface ButtonProps
 * @since 3.0.0
 * @property {ButtonModes} mode Button mode.
 * @property {StyleProp<ViewStyle>} viewStyle View style.
 * @property {StyleProp<TextStyle>} textStyle Text style.
 * @property {ReactNode} iconLeft Icon.
 * @property {ReactNode} iconRight Icon.
 * @property {string} secondText Second text.
 * @property {StyleProp<TextStyle>} secondTextStyle Second text style.
 * @property {boolean} disabled Attribute that indicates if button is disabled or not.
 * @property {StyleProp<ViewStyle>} disabledStyle Disabled style.
 * @property {StyleProp<ViewStyle>} disabledTextStyle Disabled text style.
 * @property {boolean} isLoading Attribute that indicates if button is loading or not.
 * @property {ColorValue} loaderColor Loader color.
 */
export interface ButtonProps extends Omit<RNButtonProps, "title"> {
  mode?: ButtonModes;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  secondText?: string;
  secondTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  disabledTextStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  loaderColor?: ColorValue;
  loadingText?: string;
}

// Styled Component Props
export interface ButtonStyledProps {
  buttonMode: ButtonModes;
}

export type ButtonModes = "PRIMARY" | "SECONDARY";
