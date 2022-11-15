import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import styles from "./CategoryCard.styles";
import { CategoryCardProps as Props } from "./CategoryCard.types";

import ChevronSVG from "assets/images/icons/chevronRight.svg";
import DirectorySVG from "assets/images/icons/directoryIcon.svg";

const CategoryCard: React.FC<Props> = props => {
  const { categorie, handlePress } = props;
  const { name, quantity } = categorie;
  const hasNotes = quantity !== 0;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress(name)}
    >
      <DirectorySVG style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>{quantity} notas</Text>
      </View>
      {hasNotes ? <ChevronSVG style={styles.chevron} /> : null}
    </TouchableOpacity>
  );
};

CategoryCard.defaultProps = {};

export default CategoryCard;
