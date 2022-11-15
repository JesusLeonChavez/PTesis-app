import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar, Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./HeaderScreen.styles";
import { HeaderScreenProps as Props } from "./HeaderScreen.types";
import { $palette } from "styles/util/variables";

import ArrowLeftIconSVG from "assets/images/icons/arrowLeftIcon.svg";
import CloseIconSVG from "assets/images/icons/closeIcon.svg";

const HeaderScreen: React.FC<Props> = props => {
  const { onPressLeftButton, leftImage, primaryTitle = "" } = props;
  const { onPressRightButton, rightImage } = props;

  const leftImageButton = leftImage ?? (
    <ArrowLeftIconSVG width={24} height={24} />
  );
  const rightImageButton = rightImage ?? <CloseIconSVG />;

  const leftButtonComponent = (
    <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPressLeftButton}>
      <View style={styles.leftButton}>{leftImageButton}</View>
    </TouchableOpacity>
  );

  const rightButtonComponent = (
    <TouchableOpacity hitSlop={styles.hitSlop} onPress={onPressRightButton}>
      <View>{rightImageButton}</View>
    </TouchableOpacity>
  );

  const renderTitleComponent = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.primaryTextContainer}>
          <Text style={styles.primaryTextStyle}>
            {primaryTitle.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: EStyleSheet.value("$palette.white") }}
    >
      <StatusBar
        translucent={Platform.OS === "ios"}
        animated={true}
        barStyle={"dark-content"}
        backgroundColor={$palette.white}
      />
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          {onPressLeftButton ? leftButtonComponent : null}
        </View>

        {renderTitleComponent()}

        <View style={styles.rightContainer}>
          {onPressRightButton ? rightButtonComponent : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderScreen;
