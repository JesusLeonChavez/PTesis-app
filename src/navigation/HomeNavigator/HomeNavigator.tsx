import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HomeNavigatorProps as Props } from "./HomeNavigator.types";
import { HomeNavigatorScreens as NavigatorScreens } from "./HomeNavigator.types";
import Home from "screens/Home/Home.screen";

const Stack = createStackNavigator<NavigatorScreens>();

const HomeNavigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

HomeNavigator.defaultProps = {};

export default HomeNavigator;
