import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useState } from "react";
import { ForwardRefRenderFunction, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./CreateTagBottomSheet.styles";
import { CreateTagBottomSheetProps as Props } from "./CreateTagBottomSheet.types";
import AnimatedBackdrop from "components/global/AnimatedBackdrop/AnimatedBackdrop";
import ColorPicker from "components/global/ColorPicker/ColorPicker";
import useAuth from "contexts/auth/auth.hooks";
import { createTag } from "services/notes/notes.services";

const CreateTagBottomSheet: ForwardRefRenderFunction<
  BottomSheetModal,
  Props
> = (_, ref) => {
  const { dismissAll } = useBottomSheetModal();
  const [tagName, setTagName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const { uid } = useAuth();

  const closeBottomSheet = useCallback(() => {
    setTagName("");
    setColor("");
    dismissAll();
  }, [dismissAll]);

  const onSubmit = async () => {
    if (!uid) return;

    try {
      createTag({ uid, tag: { name: tagName, color } });
      closeBottomSheet();
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["44%"]}
      backdropComponent={props => (
        <AnimatedBackdrop {...props} onPress={() => closeBottomSheet()} />
      )}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Crear etiqueta</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Nombre de etiqueta</Text>

          <TextInput
            value={tagName}
            onChangeText={text => {
              setTagName(text);
            }}
          />
          <Text>{tagName?.length ?? 0}/50</Text>
        </View>
        <View style={styles.item}>
          <Text>Color</Text>
          <ColorPicker setColor={setColor} selectedColor={color} />
        </View>
        {/* TODO: Use custom Button component */}
        <View style={[styles.item, styles.buttonContainer]}>
          <TouchableOpacity
            style={[styles.button, { marginRight: 12 }]}
            onPress={closeBottomSheet}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Crear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default forwardRef<BottomSheetModal, Props>(CreateTagBottomSheet);
