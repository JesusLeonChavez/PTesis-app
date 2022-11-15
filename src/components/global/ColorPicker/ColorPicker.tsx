import React, { useCallback, useMemo, useState } from "react";
import { ListRenderItem, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import styles from "./ColorPicker.styles";
import { ColorPickerProps as Props } from "./ColorPicker.types";
import { genColors } from "./ColorPicker.utils";

import CheckSVG from "assets/images/icons/check.svg";
import ReloadSVG from "assets/images/icons/reload.svg";

const ColorPicker: React.FC<Props> = props => {
  const { selectedColor, setColor } = props;
  const [colorList, setColorList] = useState(genColors());

  const renderItem: ListRenderItem<string> = useCallback(
    listItem => {
      const { item } = listItem;
      const isChecked = selectedColor === item;

      return (
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: item }]}
          onPress={() => setColor(item)}
        >
          {isChecked ? <CheckSVG /> : null}
        </TouchableOpacity>
      );
    },
    [selectedColor, setColor]
  );

  const renderItemMemoized = useMemo(() => renderItem, [renderItem]);

  const header = () => (
    <TouchableOpacity
      style={[styles.circle, styles.reset]}
      onPress={() => setColorList(genColors())}
    >
      <ReloadSVG />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={colorList}
      renderItem={renderItemMemoized}
      ListHeaderComponent={header}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.container}
    />
  );
};

ColorPicker.defaultProps = {};

export default ColorPicker;
