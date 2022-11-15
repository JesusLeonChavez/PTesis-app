import React, { useEffect, useRef } from "react";
import { View, Modal, Animated } from "react-native";

import styles from "./CustomModal.styles";
import { CustomModalProps as Props } from "./CustomModal.types";

const CustomModal: React.FC<Props> = props => {
  const { visible, children, customStyles, animation = "slide" } = props;
  const { canDismiss, onConfirm, onDismiss: onDismissProp } = props;

  const modalOpacity = useRef(new Animated.Value(0)).current;

  /**
   * Function to handle the modal dismiss.
   * @since 1.0.0
   */
  const onDismiss = () => {
    if (canDismiss) {
      canDismiss && dismiss();
    } else {
      dismiss();
    }
  };

  /**
   * Function to execute the modal dismiss and animation.
   * @since 1.0.0
   */
  const dismiss = () => {
    modalOpacity.setValue(1);
    Animated.timing(modalOpacity, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start(() => {
      if (onDismissProp) {
        onDismissProp();
      }
    });
  };

  useEffect(() => {
    Animated.timing(modalOpacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true
    }).start();
  }, [modalOpacity, visible]);

  if (!visible) {
    return null;
  }

  return (
    <View style={[styles.modalBackground, customStyles]}>
      <Modal
        presentationStyle="overFullScreen"
        transparent
        animationType={animation}
        visible
        onRequestClose={() => {}}
      >
        {React.cloneElement(children, {
          onDismiss: () => onDismiss(),
          onConfirm: (result: any) => (onConfirm ? onConfirm(result) : null)
        })}
      </Modal>
    </View>
  );
};

CustomModal.defaultProps = {};

export default CustomModal;
