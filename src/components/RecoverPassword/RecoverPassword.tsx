import { useNavigation } from "@react-navigation/native";
import { t } from "i18n-js";
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./RecoverPassword.styles";
import { RecoverPasswordProps as Props } from "./RecoverPassword.types";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";

import ArrowBackLeftIconSVG from "assets/images/icons/arrowBackLeftIcon.svg";

const RecoverPassword: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <ArrowBackLeftIconSVG />
      <Text style={styles.title}>{t("recoverpassword.restaurar")}</Text>
      <View style={styles.containerInputs}>
        <View>
          <Text style={styles.text}> {t("recoverpassword.nota")} </Text>
        </View>
        <View>
          <Text style={styles.label}>{t("login.correoElec")}</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonNormal}>
          <Text
            style={styles.textNormal}
            onPress={() => navigate("ConfirmationPassword")}
          >
            {t("recoverpassword.enviar")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

RecoverPassword.defaultProps = {};

export default RecoverPassword;
