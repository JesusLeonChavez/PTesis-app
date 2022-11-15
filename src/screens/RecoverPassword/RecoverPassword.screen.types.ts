// Interfaces and types from component RecoverPassword
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface RecoverPasswordProps {
  navigation: RecoverPasswordNavigation;
  route: RecoverPasswordRoute;
}

// Screen params
export interface RecoverPasswordParams {}

// Screen navigation type
export type RecoverPasswordNavigation = StackNavigationProp<
  NavigatorScreens,
  "RecoverPassword"
>;

// Screen route type
export type RecoverPasswordRoute = RouteProp<
  NavigatorScreens,
  "RecoverPassword"
>;
