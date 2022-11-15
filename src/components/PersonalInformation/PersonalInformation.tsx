import { useNavigation } from "@react-navigation/native";
import { t } from "i18n-js";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./PersonalInformation.styles";
import { PersonalInformationProps as Props } from "./PersonalInformation.types";
import CustomImage from "components/global/CustomImage/CustomImage";
import HeaderScreen from "components/global/HeaderScreen/HeaderScreen";
import SaveDataModal from "components/global/SaveDataModal/SaveDataModal";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { $palette } from "styles/util/variables";

import EditInformationIconSVG from "assets/images/icons/EditInformationIcon.svg";
import ArrowBackLeftIconSVG from "assets/images/icons/arrowBackLeftIcon.svg";

const PersonalInformation: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const ref_input2 = useRef<TextInput | null>(null);
  const ref_input3 = useRef<TextInput | null>(null);
  const { setOptions, goBack } = navigation;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setOptions({
      header: () => <HeaderScreen onPressLeftButton={goBack} />
    });
  }, [setOptions, goBack]);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <View style={styles.Container}>
      <View style={styles.MainTitleContainer}>
        <TouchableOpacity onPress={goBack}>
          <ArrowBackLeftIconSVG />
        </TouchableOpacity>
        <View style={styles.MainTitleBox}>
          <Text style={styles.MainTitle}>
            {t("personalInformation.personalinformation")}
          </Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.profileImage}>
          <CustomImage
            image={{
              url: "https://raw.githubusercontent.com/DesignIntoCode/ReactProfile02/master/assets/profile-pic.jpg"
            }}
            customStyle={styles.image}
          />
        </View>
        <View style={styles.active}></View>
        <View style={styles.add}>
          <EditInformationIconSVG style={styles.editIcon} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.PersonalInfo}>Karla Rojas</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.labelText}>{t("personalInformation.user")}</Text>
          <TextInput
            placeholder="Karla Rojas"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (ref_input2.current != null) return ref_input2.current.focus();
            }}
            placeholderTextColor={$palette.gray3}
            blurOnSubmit={false}
            autoCorrect={false}
            style={styles.inputText}
          />
          <Text></Text>
        </View>
        <View>
          <Text style={styles.labelText}>{t("personalInformation.email")}</Text>
          <TextInput
            placeholder="karla.rojas@gmail.com"
            returnKeyType="next"
            onSubmitEditing={() => {
              if (ref_input3.current != null) return ref_input3.current.focus();
            }}
            placeholderTextColor={$palette.gray3}
            blurOnSubmit={false}
            autoCorrect={false}
            style={styles.inputText}
            ref={ref_input2}
          />
          <Text></Text>
        </View>
        <View>
          <Text style={styles.labelText}>
            {t("personalInformation.password")}
          </Text>
          <TextInput
            secureTextEntry={true}
            placeholder="123456789"
            placeholderTextColor={$palette.gray3}
            autoCorrect={false}
            style={styles.inputText}
            ref={ref_input3}
          />
          <Text></Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.button}
        activeOpacity={0.6}
      >
        <Text style={styles.text}>{t("personalInformation.savechanges")}</Text>
      </TouchableOpacity>
      <SaveDataModal visible={visible} onDismiss={onDismiss} />
    </View>
  );
};

PersonalInformation.defaultProps = {};

export default PersonalInformation;
