import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { ProfileNavigatorProps as Props } from "./ProfileNavigator.types";
import { ProfileNavigatorScreens as NavigatorScreens } from "./ProfileNavigator.types";
import Profile from "screens/Profile/Profile.screen";

const Stack = createStackNavigator<NavigatorScreens>();

const ProfileNavigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

ProfileNavigator.defaultProps = {};

export default ProfileNavigator;
