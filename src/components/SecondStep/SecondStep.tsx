import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { t } from "i18n-js";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./SecondStep.styles";
import { SecondStepProps as Props } from "./SecondStep.types";
import { SecondStepFormValues } from "./SecondStep.types";
import Button from "components/global/Button/Button";
import CheckBox from "components/global/CheckBox/CheckBox";
import TermsAndConditionsModal from "components/global/TermsAndConditionsModal/TermsAndConditionsModal";
import TextBox from "components/global/TextBox/TextBox";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useSignOut from "hooks/useSignOut";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { NavigatorPropList } from "navigation/Navigator.types";
import { createUser } from "services/user/user.services";
import { $palette } from "styles/util/variables";
import { secondStepSchema } from "utils/form.utils";

import ArrowBackWhiteSVG from "assets/images/icons/arrowBackWhite.svg";
const { SSO_USER } = CONSTANTS.STORAGE;

export const defaultSecondStepFormValues = {
  name: "",
  lastname: "",
  terms: true
};

const SecondStep: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { goBack } = navigation;
  const { uid = "" } = useAuth();
  const { reset } = useNavigation<NavigatorPropList>();

  const secondStepFormMethods = useForm<SecondStepFormValues>({
    mode: "onChange",
    resolver: yupResolver(secondStepSchema),
    defaultValues: defaultSecondStepFormValues
  });
  const signOut = useSignOut(false);
  const [visible, setVisible] = useState(false);

  const { watch, setValue, formState, register } = secondStepFormMethods;
  const { handleSubmit } = secondStepFormMethods;

  const errorMessage = formState?.errors.terms?.message;

  const onDismiss = () => {
    setVisible(false);
  };

  const onSubmit = async (values: SecondStepFormValues) => {
    const { name, lastname } = values;
    try {
      const userData = await AsyncStorage.getItem(SSO_USER);

      if (!userData) throw new Error("Error");

      const { email } = JSON.parse(userData);

      await createUser({ uid, name, lastname, email });
      reset({
        routes: [
          {
            name: "TabNavigator"
          }
        ]
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          await signOut();
          goBack();
        }}
      >
        <ArrowBackWhiteSVG />
      </TouchableOpacity>
      <FormProvider {...secondStepFormMethods}>
        <Text style={styles.title}>{t("secondstep.onemorestep")}</Text>
        <View style={styles.containerInputs}>
          <TextBox
            label="Nombre"
            type="text"
            returnKeyType="next"
            {...register("name")}
            placeholder="Jesus"
            textBoxStyle={styles.input}
            placeholderTextColor={$palette.gray3}
          />

          <TextBox
            label="Apellido"
            type="text"
            returnKeyType="done"
            {...register("lastname")}
            placeholder="Ortiz"
            placeholderTextColor={$palette.gray3}
            textBoxStyle={styles.input}
          />
        </View>
        <View style={styles.termsAndConditions}>
          <CheckBox
            active={watch("terms")}
            mode="SECONDARY"
            onPress={isChecked => setValue("terms", isChecked)}
          />
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.terms}> {t("secondstep.termsCondition")} </Text>
          </TouchableOpacity>
          {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
      </FormProvider>
      <TermsAndConditionsModal visible={visible} onDismiss={onDismiss} />
      <Button
        textStyle={styles.textButton}
        viewStyle={styles.continueButton}
        onPress={handleSubmit(onSubmit)}
      >
        Continuar
      </Button>
    </View>
  );
};

SecondStep.defaultProps = {};

export default SecondStep;
