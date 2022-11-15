import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./RadioItem.styles";
import { RadioItemProps as Props } from "./RadioItem.types";
import RadioButton from "components/global/RadioButton/RadioButton";

const RadioItem: React.FC<Props> = props => {
  const { label, value, onPress = value => {}, isSelected = false } = props;
  const { disabled } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(value)}
      disabled={disabled}
    >
      <RadioButton isSelected={isSelected} />
      <Text style={styles.answerName}>{label}</Text>
    </TouchableOpacity>
  );
};

RadioItem.defaultProps = {};

export default RadioItem;
