// Interfaces and types from component Selec

import { UseControllerProps } from "react-hook-form";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

/**
 * Select Component props interface.
 *
 * @interface SelectProps
 * @since 3.0.0
 * @property {SelectItem} items Options of select.
 * @property {string} name Name of field.
 * @property {StyleProp<ViewStyle>} style The style of the container of the select.
 * @property {DocumentType} defaultValue Default value of field.
 * @property {string} label Label of select.
 * @property {StyleProp<TextStyle>} labelStyle Style of label.
 * @property {boolean} disabled  Attributes that indicates if the input is disabled.
 * @property {Trigger} trigger Trigger to validate the field when the user changes the value.
 * @property {keyof TypeOfBillingFormValues, keyof CardPaymentFormValues} triggerNameField Name of field to validate.
 */
export interface SelectProps extends UseControllerProps {
  items: SelectItem[];
  name: string;
  style?: StyleProp<ViewStyle>;
  defaultValue?: DocumentType | undefined;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

/**
 * Select item information interface.
 *
 * @interface SelectItem
 * @since 3.0.0
 * @property {string} label Label of item.
 * @property {string} value Value of item.
 */
export interface SelectItem {
  label: string;
  value: string;
}
