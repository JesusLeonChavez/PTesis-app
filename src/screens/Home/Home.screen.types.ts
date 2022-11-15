// Interfaces and types from component Home
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Component Props
export interface HomeProps {
  navigation: HomeNavigation;
  route: HomeRoute;
}

// Screen params
export interface HomeParams {}

// TODO: update anys
// Screen navigation type
export type HomeNavigation = StackNavigationProp<any, "Home">;

// Screen route type
export type HomeRoute = RouteProp<any, "Home">;

// Styled Component Props
export interface HomeStyledProps {}
