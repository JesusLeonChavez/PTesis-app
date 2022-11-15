import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface PersonalInformationProps {
  navigation: PersonalInformationNavigation;
  route: PersonalInformationRoute;
}

// Screen params
export interface PersonalInformationParams {}

// Screen navigation type
export type PersonalInformationNavigation = StackNavigationProp<
  NavigatorScreens,
  "PersonalInformation"
>;

// Screen route type
export type PersonalInformationRoute = RouteProp<
  NavigatorScreens,
  "PersonalInformation"
>;
