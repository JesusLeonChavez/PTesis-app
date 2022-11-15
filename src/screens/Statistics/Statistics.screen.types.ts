// Interfaces and types from component Statistics
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StatisticsNavigatorScreens } from "navigation/StatisticsNavigator/StatisticsNavigator.types";

// Component Props
export interface StatisticsProps {
  navigation: StatisticsNavigation;
  route: StatisticsRoute;
}

// Screen params
export interface StatisticsParams {}

// Screen navigation type
export type StatisticsNavigation = StackNavigationProp<
  StatisticsNavigatorScreens,
  "Statistics"
>;

// Screen route type
export type StatisticsRoute = RouteProp<
  StatisticsNavigatorScreens,
  "Statistics"
>;
