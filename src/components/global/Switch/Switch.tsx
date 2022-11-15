import { animated, useSpring } from "@react-spring/native";
import React, { ElementType } from "react";
import { View, ViewProps, TouchableWithoutFeedback } from "react-native";

import styles from "./Switch.styles";
import { SwitchProps as Props } from "./Switch.types";
import variables from "styles/util/variables";

const { black, gray3 } = variables.$palette;

const AnimatedView = animated<ElementType<ViewProps>>(View);

const Switch: React.FC<Props> = props => {
  const { active, onPress, disabled = false } = props;
  const { customStyle } = props;

  const animatedView = useSpring({
    to: {
      left: active ? 16 : 0,
      backgroundColor: active ? black : gray3,
      opacity: disabled ? 0.5 : 1
    },
    config: { duration: 80 }
  });

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      disabled={disabled}
      style={customStyle}
    >
      {/* @ts-ignore */}
      <AnimatedView
        style={[
          styles.container,
          { backgroundColor: animatedView.backgroundColor },
          { opacity: animatedView.opacity }
        ]}
      >
        <AnimatedView style={{ left: animatedView.left }}>
          <View style={styles.ball} />
        </AnimatedView>
      </AnimatedView>
    </TouchableWithoutFeedback>
  );
};

Switch.defaultProps = {};

export default Switch;
