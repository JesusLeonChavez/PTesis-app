import React from "react";
import { View, Text } from "react-native";

import Button from "../Button/Button";
import CustomModal from "../CustomModal/CustomModal";
import styles from "./TermsAndConditionsModal.styles";
import { TermsAndConditionsModalProps as Props } from "./TermsAndConditionsModal.types";

import KeyIconSVG from "assets/images/icons/keyIcon.svg";
import NoteIconSVG from "assets/images/icons/notePencilIcon.svg";

const TermsAndConditionsModal: React.FC<Props> = props => {
  const { visible, onDismiss } = props;
  return (
    <CustomModal visible={visible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Términos y condiciones</Text>
          <Text style={styles.body}>
            Antes de que te registres, queremos informarte sobre nuestras
            condiciones de privacidad.
          </Text>
          <View style={styles.conditions}>
            <KeyIconSVG />
            <Text style={styles.body}>
              Nice memo no puede ver tu contraseña en ningún momento.
            </Text>
          </View>
          <View style={styles.conditions}>
            <NoteIconSVG />
            <Text style={styles.body}>
              Aún estamos trabajando para que el contenido de tus notas sea
              privado por lo que te pedimos que lo tomes en consideración.
            </Text>
          </View>
          <Text style={styles.body}>
            Gracias por querer ser parte de nuestra comunidad Nice Memo.
          </Text>
          <Button onPress={onDismiss}>Okay</Button>
        </View>
      </View>
    </CustomModal>
  );
};

TermsAndConditionsModal.defaultProps = {};

export default TermsAndConditionsModal;
