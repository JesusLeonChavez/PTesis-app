import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18n-js";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Register.styles";
import { RegisterMethods, RegisterProps as Props } from "./Register.types";
import Button from "components/global/Button/Button";
import TextBox from "components/global/TextBox/TextBox";
import CONSTANTS from "config/constants";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { $palette } from "styles/util/variables";

import ArrowBackWhiteSVG from "assets/images/icons/arrowBackWhite.svg";
const { SSO_USER } = CONSTANTS.STORAGE;

const Register: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { goBack } = navigation;
  const registerMethods = useForm<RegisterMethods>({
    mode: "onChange",
    defaultValues: {}
  });
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = registerMethods;

  const onSubmit = async (values: RegisterMethods) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);

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
      <Text style={styles.title}>{t("login.register")}</Text>
      <View style={styles.containerInputs}>
        <FormProvider {...registerMethods}>
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
      </View>
      <View style={styles.containerButtons}>
        <Button
          viewStyle={styles.buttonNormal}
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          <Text style={styles.textNormal}>{t("login.register")}</Text>
        </Button>
        <View style={styles.containerWithSigIng}>
          <Text style={styles.text}>{t("login.notAccount")}</Text>
          <TouchableOpacity style={styles.sigIn} onPress={goBack}>
            <Text style={styles.sigInText}>{t("login.iniciarSesion")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Register.defaultProps = {};

export default Register;
