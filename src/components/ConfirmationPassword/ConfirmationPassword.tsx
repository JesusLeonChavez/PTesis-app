import React from "react";
import { View, Text } from "react-native";

import Button from "../global/Button/Button";
import styles from "./ConfirmationPassword.styles";
import { ConfirmationPasswordProps as Props } from "./ConfirmationPassword.types";

import ArrowBackLeftIconSVG from "assets/images/icons/arrowBackLeftIcon.svg";
import LogoConfirmationPasswordSVG from "assets/images/icons/logoConfirmationPassword.svg";

const ConfirmationPassword: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <ArrowBackLeftIconSVG />
      <View style={styles.containerForgot}>
        <LogoConfirmationPasswordSVG />
        <Text style={styles.title}>¡Mensaje enviado!</Text>
        <Text style={styles.text}>Se envió un email al correo:</Text>
        <Text style={styles.emailUser}>jesusleonchavez@gmail.com</Text>
      </View>
      <View>
        <Button viewStyle={styles.button} textStyle={styles.textButton}>
          Iniciar Sesión
        </Button>
      </View>
    </View>
  );
};

ConfirmationPassword.defaultProps = {};

export default ConfirmationPassword;
