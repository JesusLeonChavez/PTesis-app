import React from "react";
import { Text, View } from "react-native";

import styles from "./Statistics.screen.styles";
import { StatisticsProps as Props } from "./Statistics.screen.types";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const Statistics: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>Statistics</Text>
      </View>
    </ScreenTemplate>
  );
};

Statistics.defaultProps = {};

export default Statistics;
