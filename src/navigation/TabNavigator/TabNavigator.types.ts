// Interfaces and types for component TabNavigatorNavigator

import { NavigatorScreenParams } from "@react-navigation/native";

import { HomeNavigatorScreens } from "navigation/HomeNavigator/HomeNavigator.types";
import { ProfileNavigatorScreens } from "navigation/ProfileNavigator/ProfileNavigator.types";
import { StatisticsNavigatorScreens } from "navigation/StatisticsNavigator/StatisticsNavigator.types";

// Component Props
export interface TabNavigatorProps {}

// Navigator screens and screens params
export type TabNavigatorScreens = {
  HomeNavigator: NavigatorScreenParams<HomeNavigatorScreens>;
  StatisticsNavigator: NavigatorScreenParams<StatisticsNavigatorScreens>;
  ProfileNavigator: NavigatorScreenParams<ProfileNavigatorScreens>;
};

export type RouteNavigator =
  | "HomeNavigator"
  | "StatisticsNavigator"
  | "ProfileNavigator";
