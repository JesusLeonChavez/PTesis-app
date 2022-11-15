// Interfaces and types for component ProfileNavigator

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";
import { TabNavigatorScreens } from "navigation/TabNavigator/TabNavigator.types";
import { ProfileParams } from "screens/Profile/Profile.screen.types";

// Component Props
export interface ProfileNavigatorProps {}

// Navigator screens and screens params
export type ProfileNavigatorScreens = {
  Profile?: ProfileParams;
};

export type ProfileNavigatorPropList = CompositeNavigationProp<
  StackNavigationProp<NavigatorScreens>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorScreens, "ProfileNavigator">,
    StackNavigationProp<ProfileNavigatorScreens>
  >
>;
