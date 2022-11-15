// Interfaces and types from component SecondStep
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface SecondStepProps {
  navigation: SecondStepNavigation;
  route: SecondStepRoute;
}

// Screen params
export interface SecondStepParams {}

// Screen navigation type
export type SecondStepNavigation = StackNavigationProp<
  NavigatorScreens,
  "SecondStep"
>;

// Screen route type
export type SecondStepRoute = RouteProp<NavigatorScreens, "SecondStep">;
