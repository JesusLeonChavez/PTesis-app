import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { useAnimatedStyle } from "react-native-reanimated";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

import { AnimatedBackdropProps } from "./AnimatedBackdrop.types";

const AnimatedBackdrop = (
  props: BottomSheetBackdropProps & AnimatedBackdropProps
) => {
  const { animatedIndex, style, onPress } = props;
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex?.value,
      [-1, 0, 1],
      [0.05, 0.3, 0.7],
      Extrapolate.CLAMP
    ),
    zIndex: interpolate(
      animatedIndex?.value,
      [-1, 0, 1],
      [-1, 0, 0],
      Extrapolate.EXTEND
    )
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: EStyleSheet.value("$palette.black")
      },
      containerAnimatedStyle
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
};

AnimatedBackdrop.defaultProps = {};

export default AnimatedBackdrop;
