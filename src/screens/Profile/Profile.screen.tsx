import React from "react";
import { View } from "react-native";

import styles from "./Profile.screen.styles";
import { ProfileProps as Props } from "./Profile.screen.types";
import Profile from "components/Profile/Profile";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const ProfileScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Profile />
      </View>
    </ScreenTemplate>
  );
};

ProfileScreen.defaultProps = {};

export default ProfileScreen;
