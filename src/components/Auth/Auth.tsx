import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Auth.styles";
import { AuthProps as Props } from "./Auth.types";
import useAuth from "contexts/auth/auth.hooks";
import { StatisticsNavigatorPropList } from "navigation/StatisticsNavigator/StatisticsNavigator.types";

import EmailSVG from "assets/images/icons/emailIcon.svg";
import GoogleIconSVG from "assets/images/icons/googleIcon.svg";
import LogoSVG from "assets/images/logo.svg";

const Auth: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { signInWithGoogle } = useAuth();

  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.containerTitles}>
        <LogoSVG />
        <Text style={styles.title}>Nice Memo</Text>
        <Text style={styles.info}>Tu app de notas siempre disponible</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigate("Login")}
        >
          <EmailSVG />
          <Text style={styles.loginText}>Iniciar con correo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={signInWithGoogle}
        >
          <GoogleIconSVG />
          <Text style={styles.registerText}>Iniciar con Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Auth.defaultProps = {};

export default Auth;
