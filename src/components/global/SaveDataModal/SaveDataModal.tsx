import React from "react";
import { View, Text } from "react-native";

import Button from "../Button/Button";
import CustomModal from "../CustomModal/CustomModal";
import styles from "./SaveDataModal.styles";
import { SaveDataModalProps as Props } from "./SaveDataModal.types";

import SaveDataIconSVG from "assets/images/icons/saveDataIcon.svg";

const SaveDataModal: React.FC<Props> = props => {
  const { visible, onDismiss } = props;

  return (
    <CustomModal visible={visible}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconSVG}>
            <SaveDataIconSVG />
          </View>
          <Text style={styles.textTitle}>Guardar Cambios</Text>
          <Text style={styles.text}>
            ¿Quieres guardar los cambios de tu perfil?
          </Text>
          <View style={styles.containerButtons}>
            <Button
              viewStyle={styles.buttonCancel}
              textStyle={styles.textCancel}
              onPress={onDismiss}
            >
              No, cancelar
            </Button>
            <Button
              viewStyle={styles.buttonOk}
              textStyle={styles.textOk}
              onPress={onDismiss}
            >
              Si, guardar
            </Button>
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

SaveDataModal.defaultProps = {};

export default SaveDataModal;
