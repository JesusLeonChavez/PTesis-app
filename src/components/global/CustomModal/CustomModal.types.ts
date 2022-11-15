// Interfaces and types from component CustomModal
import { ReactElement } from "react";
import { StyleProp, ViewStyle } from "react-native";

/**
 * Choose country modal props.
 * @interface ChooseCountryModalProps
 * @since 3.0.0
 * @property {boolean} visible If the modal is visible or not
 * @property {ReactNode} children Children of the modal
 * @property {StyleProp<ViewStyle>} customStyles Custom styles of modal
 * @property {Animation} animation Animation type of modal
 * @property {boolean} canDismiss Attribute that indicates if modal can be dismissed or not.
 * @property {function} onConfirm Modal confirm callback.
 * @property {function} onDismiss Modal dismiss callback.
 */
export interface CustomModalProps {
  visible: boolean;
  children: ReactElement;
  customStyles?: StyleProp<ViewStyle>;
  animation?: Animation;
  canDismiss?: boolean;
  onConfirm?: (result: any) => void;
  onDismiss?: () => void;
}

/**
 * Animation type of modal
 * @type Animation
 */
type Animation = "slide" | "none" | "fade" | undefined;
