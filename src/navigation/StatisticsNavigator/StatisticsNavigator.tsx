import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { StatisticsNavigatorProps as Props } from "./StatisticsNavigator.types";
import { StatisticsNavigatorScreens as NavigatorScreens } from "./StatisticsNavigator.types";
import Statistics from "screens/Statistics/Statistics.screen";

const Stack = createStackNavigator<NavigatorScreens>();

const StatisticsNavigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

StatisticsNavigator.defaultProps = {};

export default StatisticsNavigator;
