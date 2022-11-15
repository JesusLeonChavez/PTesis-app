// Interfaces and types from component ConfirmationPassword
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface ConfirmationPasswordProps {
  navigation: ConfirmationPasswordNavigation;
  route: ConfirmationPasswordRoute;
}

// Screen params
export interface ConfirmationPasswordParams {}

// Screen navigation type
export type ConfirmationPasswordNavigation = StackNavigationProp<
  NavigatorScreens,
  "ConfirmationPassword"
>;

// Screen route type
export type ConfirmationPasswordRoute = RouteProp<
  NavigatorScreens,
  "ConfirmationPassword"
>;
