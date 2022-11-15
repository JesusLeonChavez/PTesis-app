// Interfaces and types from component Notes
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface NotesProps {
  navigation: NotesNavigation;
  route: NotesRoute;
}

// Screen params
export interface NotesParams {
  categoryName: string;
}

// Screen navigation type
export type NotesNavigation = StackNavigationProp<NavigatorScreens, "Notes">;

// Screen route type
export type NotesRoute = RouteProp<NavigatorScreens, "Notes">;
