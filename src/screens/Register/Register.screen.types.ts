// Interfaces and types from component Register
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface RegisterProps {
  navigation: RegisterNavigation;
  route: RegisterRoute;
}

// Screen params
export interface RegisterParams {}

// Screen navigation type
export type RegisterNavigation = StackNavigationProp<
  NavigatorScreens,
  "Register"
>;

// Screen route type
export type RegisterRoute = RouteProp<NavigatorScreens, "Register">;
