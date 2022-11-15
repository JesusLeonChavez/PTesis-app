// Interfaces and types from component Login
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface LoginProps {
  navigation: LoginNavigation;
  route: LoginRoute;
}

// Screen params
export interface LoginParams {}

// Screen navigation type
export type LoginNavigation = StackNavigationProp<NavigatorScreens, "Login">;

// Screen route type
export type LoginRoute = RouteProp<NavigatorScreens, "Login">;
