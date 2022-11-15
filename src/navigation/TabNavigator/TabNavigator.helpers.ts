// TabNavigator helpers

import { getFocusedRouteNameFromRoute, Route } from "@react-navigation/native";
import { Animated, StyleProp, ViewStyle } from "react-native";

import styles from "./TabNavigator.styles";
import { RouteNavigator } from "./TabNavigator.types";

/**
 * Helper to show the tab bar.
 *
 * @param {Partial<Route<RouteNavigator>>} route The route from which the tab bar will be shown.
 * @returns The display value of the tab bar.
 */
export const showTabsInScreenHelper = (
  route: Partial<Route<RouteNavigator>>
): Animated.WithAnimatedValue<StyleProp<ViewStyle>> => {
  const screenName = getFocusedRouteNameFromRoute(route);
  switch (screenName) {
    case "Home":
      return styles.tabNavigatorStyle;
    case "Statistics":
      return styles.tabNavigatorStyle;
    case "Profile":
      return styles.tabNavigatorStyle;
    case undefined:
      return styles.tabNavigatorStyle;
    default:
      return { display: "none" };
  }
};
