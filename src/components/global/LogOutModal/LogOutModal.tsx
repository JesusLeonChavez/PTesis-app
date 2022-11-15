import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import CustomModal from "../CustomModal/CustomModal";
import styles from "./LogOutModal.styles";
import { LogOutModalProps as Props } from "./LogOutModal.types";
import useAuth from "contexts/auth/auth.hooks";

import LogOutIconSVG from "assets/images/icons/signOffIcon.svg";

const LogOutModal: React.FC<Props> = props => {
  const { visible, onDismiss } = props;
  const { logout } = useAuth();

  const onLogOut = async () => {
    await logout();
    onDismiss();
  };

  return (
    <CustomModal visible={visible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <LogOutIconSVG />
          <Text style={styles.title}>Cerrar sesión</Text>
          <Text style={styles.body}>¿Quieres salir de la aplicación?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.buttonSecondary, { marginRight: 12 }]}
              onPress={onDismiss}
            >
              <Text style={styles.buttonTextSec}>No, cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonPrimary} onPress={onLogOut}>
              <Text style={styles.buttonTextPrim}>Sí, salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

LogOutModal.defaultProps = {};

export default LogOutModal;
