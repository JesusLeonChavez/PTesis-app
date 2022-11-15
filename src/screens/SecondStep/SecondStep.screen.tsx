import React from "react";
import { View } from "react-native";

import styles from "./SecondStep.screen.styles";
import { SecondStepProps as Props } from "./SecondStep.screen.types";
import SecondStep from "components/SecondStep/SecondStep";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const SecondStepScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <SecondStep />
      </View>
    </ScreenTemplate>
  );
};

SecondStepScreen.defaultProps = {};

export default SecondStepScreen;
