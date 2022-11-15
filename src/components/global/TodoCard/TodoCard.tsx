import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./TodoCard.styles";
import { TodoCardProps as Props } from "./TodoCard.types";

import TrashSVG from "assets/images/icons/trashIcon.svg";

const TodoCard: React.FC<Props> = props => {
  const { description, date, checked, onCheck, id, onDelete } = props;
  const { priority } = props;

  const transformPriority = () => {
    switch (priority) {
      case "1":
        return { backgroundColor: "green" };
      case "2":
        return { backgroundColor: "yellow" };
      case "3":
        return { backgroundColor: "red" };
      default:
        return { backgroundColor: "red" };
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        {onCheck ? (
          <CheckBox
            value={checked}
            onValueChange={val => onCheck?.(checked, id)}
          />
        ) : null}
        <View style={styles.data}>
          <View style={styles.description}>
            <Text>{description}</Text>
          </View>
          <View style={styles.date}>
            <Text>{date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.modifiers}>
        <View style={[styles.importance, transformPriority()]} />
        {onDelete ? (
          <TouchableOpacity onPress={() => onDelete?.(id)}>
            <TrashSVG style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

TodoCard.defaultProps = {};

export default TodoCard;
