// Interfaces and types for component StatisticsNavigator

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";
import { TabNavigatorScreens } from "navigation/TabNavigator/TabNavigator.types";
import { StatisticsParams } from "screens/Statistics/Statistics.screen.types";

// Component Props
export interface StatisticsNavigatorProps {}

// Navigator screens and screens params
export type StatisticsNavigatorScreens = {
  Statistics?: StatisticsParams;
};

export type StatisticsNavigatorPropList = CompositeNavigationProp<
  StackNavigationProp<NavigatorScreens>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorScreens, "StatisticsNavigator">,
    StackNavigationProp<StatisticsNavigatorScreens>
  >
>;
