import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { t } from "i18n-js";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import TermsAndConditionsModal from "../global/TermsAndConditionsModal/TermsAndConditionsModal";
import styles from "./Profile.styles";
import { ProfileProps as Props } from "./Profile.types";
import CustomImage from "components/global/CustomImage/CustomImage";
import HeaderScreen from "components/global/HeaderScreen/HeaderScreen";
import useSignOut from "hooks/useSignOut";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { useFetchUser } from "services/user/user.services.hooks";

import ArrowBackLeftIconSVG from "assets/images/icons/arrowBackLeftIcon.svg";
import LogoutIconSVG from "assets/images/icons/logout.svg";
import PersonaInfoIconSVG from "assets/images/icons/personalInfoIcon.svg";
import ShieldExclamationIconSVG from "assets/images/icons/shieldExclamationIcon.svg";

const Profile: React.FC<Props> = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { data: user } = useFetchUser();
  const now = dayjs();
  const { navigate, setOptions, goBack } = navigation;
  const { userData } = user ?? {};
  const { name, lastname } = userData ?? {};

  const signOut = useSignOut(false);
  useEffect(() => {
    setOptions({
      header: () => <HeaderScreen onPressLeftButton={goBack} />
    });
  }, [setOptions, goBack]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={goBack}>
            <ArrowBackLeftIconSVG />
          </TouchableOpacity>
          <View style={styles.titlebox}>
            <Text style={styles.title}>{t("profile.myaccount")}</Text>
          </View>
        </View>
        <View style={styles.user}>
          <CustomImage
            image={{
              url: "https://raw.githubusercontent.com/DesignIntoCode/ReactProfile02/master/assets/profile-pic.jpg"
            }}
            resizeMode="cover"
            customStyle={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{`${name} ${lastname}`}</Text>
            <Text style={styles.date}>
              {t("profile.textdate") + now.format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.LineSeparator} />
          <View style={styles.ItemContainer}>
            <TouchableOpacity
              style={styles.ListItem}
              onPress={() => {
                navigate("PersonalInformation");
              }}
            >
              <PersonaInfoIconSVG />
              <View style={styles.ListItemInnerContentView}>
                <Text style={styles.TextStyles}>
                  {t("personalInformation.personalinformation")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.LineSeparator} />
          <View style={styles.ItemContainer}>
            <TouchableOpacity
              style={styles.ListItem}
              onPress={() => setModalVisible(true)}
            >
              <ShieldExclamationIconSVG />
              <View style={styles.ListItemInnerContentView}>
                <Text style={styles.TextStyles}>
                  {t("profile.privacyPolicy")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.LineSeparator} />
          <View style={styles.ItemContainer}>
            <TouchableOpacity
              style={styles.ListItem}
              onPress={() => {
                signOut();
                navigate("AuthScreen");
              }}
            >
              <LogoutIconSVG />
              <View style={styles.ListItemInnerContentView}>
                <Text style={styles.TextStyles}>{t("profile.logout")}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.LineSeparator} />
        </ScrollView>
        <TermsAndConditionsModal
          visible={modalVisible}
          onDismiss={() => setModalVisible(!modalVisible)}
        />
      </View>
    </>
  );
};

Profile.defaultProps = {};

export default Profile;
