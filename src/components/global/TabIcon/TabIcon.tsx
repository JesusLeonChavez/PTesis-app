import React from "react";
import { View, Text } from "react-native";

import styles from "./TabIcon.styles";
import { TabIconProps as Props } from "./TabIcon.types";

const TabIcon: React.FC<Props> = props => {
  const { focused, icon, inactiveIcon, tabText } = props;

  return (
    <View style={styles.container}>
      {focused ? icon : inactiveIcon ?? icon}
      <Text style={styles.tabTextStyle}>{tabText}</Text>
    </View>
  );
};

TabIcon.defaultProps = {};

export default TabIcon;
