import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { showTabsInScreenHelper } from "./TabNavigator.helpers";
import styles from "./TabNavigator.styles";
import { TabNavigatorProps as Props } from "./TabNavigator.types";
import { TabNavigatorScreens as NavigatorScreens } from "./TabNavigator.types";
import TabIcon from "components/global/TabIcon/TabIcon";
import CONSTANTS from "config/constants";
import HomeNavigator from "navigation/HomeNavigator/HomeNavigator";
import ProfileNavigator from "navigation/ProfileNavigator/ProfileNavigator";
import StatisticsNavigator from "navigation/StatisticsNavigator/StatisticsNavigator";

import NotesSVG from "assets/images/tabNavigator/notes.svg";
import ProfileSVG from "assets/images/tabNavigator/profile.svg";
import StatisticsSVG from "assets/images/tabNavigator/statistics.svg";

const { WITH_STATISTICS } = CONSTANTS.FEATURE_FLAGS;

const Tab = createBottomTabNavigator<NavigatorScreens>();

const TabNavigator: React.FC<Props> = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabNavigatorStyle
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={({ route }) => ({
          tabBarStyle: showTabsInScreenHelper(route),
          tabBarIcon: props => (
            <TabIcon
              {...props}
              icon={<NotesSVG style={styles.activeIcon} />}
              inactiveIcon={<NotesSVG style={styles.inactiveIcon} />}
              tabText="Notas"
            />
          )
        })}
      />
      {WITH_STATISTICS ? (
        <Tab.Screen
          name="StatisticsNavigator"
          component={StatisticsNavigator}
          options={({ route }) => ({
            tabBarStyle: showTabsInScreenHelper(route),
            tabBarIcon: props => (
              <TabIcon
                {...props}
                icon={<StatisticsSVG style={styles.activeIcon} />}
                inactiveIcon={<StatisticsSVG style={styles.inactiveIcon} />}
                tabText="Estadísticas"
              />
            )
          })}
        />
      ) : null}

      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarStyle: showTabsInScreenHelper(route),
          tabBarIcon: props => (
            <TabIcon
              {...props}
              icon={<ProfileSVG style={styles.activeIcon} />}
              inactiveIcon={<ProfileSVG style={styles.inactiveIcon} />}
              tabText="Perfil"
            />
          )
        })}
      />
    </Tab.Navigator>
  );
};

TabNavigator.defaultProps = {};

export default TabNavigator;
