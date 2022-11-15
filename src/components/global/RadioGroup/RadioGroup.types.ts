// Interfaces and types from component RadioGroup

import { FieldError, UseControllerProps } from "react-hook-form";
import { TextStyle, StyleProp, ViewStyle } from "react-native";

// Component Props
export interface RadioGroupProps extends UseControllerProps {
  name: string;
  children?: JSX.Element | JSX.Element[];
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError;
  inputStyle?: StyleProp<TextStyle>;
  style?: ViewStyle;
  defaultValue?: string;
}
