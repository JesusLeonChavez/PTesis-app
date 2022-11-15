// Interfaces and types from component Profile
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ProfileNavigatorScreens } from "navigation/ProfileNavigator/ProfileNavigator.types";

// Component Props
export interface ProfileProps {
  navigation: ProfileNavigation;
  route: ProfileRoute;
}

// Screen params
export interface ProfileParams {}

// Screen navigation type
export type ProfileNavigation = StackNavigationProp<
  ProfileNavigatorScreens,
  "Profile"
>;

// Screen route type
export type ProfileRoute = RouteProp<ProfileNavigatorScreens, "Profile">;
