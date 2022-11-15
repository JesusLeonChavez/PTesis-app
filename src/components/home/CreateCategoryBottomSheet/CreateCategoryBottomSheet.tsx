import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useState } from "react";
import { ForwardRefRenderFunction, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./CreateCategoryBottomSheet.styles";
import { CreateCategoryBottomSheetProps as Props } from "./CreateCategoryBottomSheet.types";
import AnimatedBackdrop from "components/global/AnimatedBackdrop/AnimatedBackdrop";
import useAuth from "contexts/auth/auth.hooks";
import { createCategory } from "services/notes/notes.services";

const CreateCategoryBottomSheet: ForwardRefRenderFunction<
  BottomSheetModal,
  Props
> = (props, ref) => {
  const { onClose } = props;
  const { dismissAll } = useBottomSheetModal();
  const [categoryName, setCategoryName] = useState<string>("");
  const { uid } = useAuth();

  const closeBottomSheet = useCallback(() => {
    setCategoryName("");
    dismissAll();
  }, [dismissAll]);

  const onSubmit = async () => {
    if (!uid) return;

    try {
      createCategory({ uid, categoryName });
      closeBottomSheet();
      onClose();
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["30%"]}
      backdropComponent={props => (
        <AnimatedBackdrop {...props} onPress={() => closeBottomSheet()} />
      )}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Crear lista</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>Nombre de lista</Text>
          <TextInput
            value={categoryName}
            onChangeText={text => {
              setCategoryName(text);
            }}
          />
          <Text>{categoryName?.length ?? 0}/50</Text>
        </View>
        {/* TODO: Use custom Button component */}
        <View style={[styles.item, styles.buttonContainer]}>
          <TouchableOpacity
            style={[styles.button, { marginRight: 12 }]}
            onPress={closeBottomSheet}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default forwardRef<BottomSheetModal, Props>(CreateCategoryBottomSheet);
