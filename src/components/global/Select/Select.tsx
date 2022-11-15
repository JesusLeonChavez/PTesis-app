import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useState, useMemo } from "react";
import { useCallback, useRef } from "react";
import { useController } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import RadioButton from "../RadioButton/RadioButton";
import { getSnapPointHelper } from "./Select.helpers";
import styles from "./Select.styles";
import { SelectItem, SelectProps as Props } from "./Select.types";
import useOnMount from "hooks/useOnMount";

import ArrowDropDownIconSVG from "assets/images/icons/arrowDropDownIcon.svg";

const Select = forwardRef<TouchableWithoutFeedback, Props>(
  (props: Props, ref): React.ReactElement => {
    const { items, name, rules, defaultValue, label: inputLabel } = props;
    const { disabled } = props;

    const initialValue = defaultValue ?? items[0].value;

    const [selectedValue, setSelectedValue] = useState(initialValue);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => [`${getSnapPointHelper(items)}`], [items]);
    const { field } = useController({
      name,
      rules,
      defaultValue: initialValue
    });
    const { onChange } = field;
    const selectedItem = items.find(item => item.value === selectedValue);
    const { label: selectedLabel } = selectedItem ?? {};
    const disabledStyle = disabled ? styles.opacity : {};

    /**
     * Function to show the BottomSheetModal component.
     * @since 3.0.0
     */
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);

    /**
     * Function to set the value of the current selected item.
     * @since 3.0.0
     * @param {string } value The selected value of the option.
     */
    const handleOptionPress = (value: string) => {
      onChange(value);
      setSelectedValue(value);
      bottomSheetModalRef.current?.dismiss();
    };

    /**
     * Function to render the item option component.
     * @since 3.0.0
     * @param {SelectItem} item The option item information to be rendered.
     * @param {number} index The index for the key component.
     * @returns {JSX.Element} Returns the option item component.
     */
    const renderItemOption = (item: SelectItem, index: number) => {
      const { label, value } = item;
      const isSelected = value === selectedValue;

      return (
        <TouchableOpacity
          key={index}
          style={styles.itemContainer}
          onPress={() => handleOptionPress(value)}
        >
          <RadioButton
            mode="check"
            isSelected={isSelected}
            customStyle={styles.customRadioStyle}
            customInnerStyle={styles.customRadioStyle}
          />
          <Text style={styles.itemText}>{label}</Text>
        </TouchableOpacity>
      );
    };

    useOnMount(() => {
      if (field.value) {
        setSelectedValue(field.value);
        onChange(field.value);
      }
    });

    return (
      <View style={disabledStyle}>
        <View style={styles.mainContainer}>
          <Text style={styles.label}>{inputLabel}</Text>
          <TouchableWithoutFeedback
            onPress={handlePresentModalPress}
            disabled={disabled}
          >
            <View style={styles.inputContainer}>
              <Text style={styles.textInput}>{selectedLabel}</Text>
              <ArrowDropDownIconSVG />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          style={styles.modalShadow}
          backgroundStyle={styles.backgroundStyle}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.titleModal}>{inputLabel}</Text>
            {items.map((item, index) => {
              return renderItemOption(item, index);
            })}
          </View>
        </BottomSheetModal>
      </View>
    );
  }
);

export default Select;
