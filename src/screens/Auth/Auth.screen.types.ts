// Interfaces and types from component Auth
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface AuthProps {
  navigation: AuthNavigation;
  route: AuthRoute;
}

// Screen params
export interface AuthParams {}

// Screen navigation type
export type AuthNavigation = StackNavigationProp<
  NavigatorScreens,
  "AuthScreen"
>;

// Screen route type
export type AuthRoute = RouteProp<NavigatorScreens, "AuthScreen">;
