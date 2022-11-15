import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18n-js";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./Login.styles";
import { LoginMethods, LoginProps as Props } from "./Login.types";
import Button from "components/global/Button/Button";
import TextBox from "components/global/TextBox/TextBox";
import CONSTANTS from "config/constants";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { $palette } from "styles/util/variables";

import ArrowBackWhiteSVG from "assets/images/icons/arrowBackWhite.svg";

const { SSO_USER } = CONSTANTS.STORAGE;

const Login: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const loginMethods = useForm<LoginMethods>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = loginMethods;
  const { navigate, goBack } = navigation;
  const onSubmit = async (values: LoginMethods) => {
    const { email, password } = values;
    console.log({ values });
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);

      await AsyncStorage.setItem(
        SSO_USER,
        JSON.stringify({
          name: "name",
          lastName: "lastName",
          phoneNumber: "00000000",
          email
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <ArrowBackWhiteSVG />
      </TouchableOpacity>
      <Text style={styles.title}>{t("login.iniciarSesion")}</Text>
      <View style={styles.containerInputs}>
        <FormProvider {...loginMethods}>
          <TextBox
            label="Email"
            type="email"
            returnKeyType="next"
            {...register("email")}
            placeholder="sebas@gmail.com"
            textBoxStyle={styles.input}
            placeholderTextColor={$palette.gray3}
          />
          <TextBox
            label="Contraseña"
            type="password"
            returnKeyType="done"
            {...register("password")}
            placeholder="*****************"
            textBoxStyle={styles.input}
            placeholderTextColor={$palette.gray3}
          />
        </FormProvider>
        <TouchableOpacity style={styles.forget}>
          <Text
            style={styles.forgetText}
            onPress={() => navigate("RecoverPassword")}
          >
            {t("login.forgetPassword")}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <Button
          viewStyle={styles.buttonNormal}
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          <Text style={styles.textNormal}>{t("login.iniciarSesion")}</Text>
        </Button>
        <View style={styles.containerWithRegister}>
          <Text style={styles.text}>{t("login.notAccount")}</Text>
          <TouchableOpacity
            style={styles.register}
            onPress={() => {
              navigate("Register");
            }}
          >
            <Text style={styles.registerText}>{t("login.register")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
Login.defaultProps = {};

export default Login;
