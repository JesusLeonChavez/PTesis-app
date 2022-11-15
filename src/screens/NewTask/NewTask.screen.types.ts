// Interfaces and types from component NewTask
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface NewTaskProps {
  navigation: NewTaskNavigation;
  route: NewTaskRoute;
}

// Screen params
export interface NewTaskParams {}

// Screen navigation type
export type NewTaskNavigation = StackNavigationProp<
  NavigatorScreens,
  "NewTask"
>;

// Screen route type
export type NewTaskRoute = RouteProp<NavigatorScreens, "NewTask">;
