// Interfaces and types for component HomeNavigator

import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigatorScreens } from "navigation/Navigator.types";
import { TabNavigatorScreens } from "navigation/TabNavigator/TabNavigator.types";
import { HomeParams } from "screens/Home/Home.screen.types";

// Component Props
export interface HomeNavigatorProps {}

// Navigator screens and screens params
export type HomeNavigatorScreens = {
  Home: HomeParams;
};

export type StatisticsNavigatorPropList = CompositeNavigationProp<
  StackNavigationProp<NavigatorScreens>,
  CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorScreens, "HomeNavigator">,
    StackNavigationProp<HomeNavigatorScreens>
  >
>;
