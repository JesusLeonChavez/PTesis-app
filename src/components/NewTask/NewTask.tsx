import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./NewTask.styles";
import { NewTaskConfig, NewTaskProps as Props } from "./NewTask.types";
import HeaderScreen from "components/global/HeaderScreen/HeaderScreen";
import Select from "components/global/Select/Select";
import TextBox from "components/global/TextBox/TextBox";
import useAuth from "contexts/auth/auth.hooks";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { createTask } from "services/notes/notes.services";
import { $palette } from "styles/util/variables";

import CheckSVG from "assets/images/icons/check.svg";
import HightPrioritySVG from "assets/images/icons/hightPriority.svg";
import LowPrioritySVG from "assets/images/icons/lowPriority.svg";
import MediumPrioritySVG from "assets/images/icons/mediumPriority.svg";

interface CategorieLocal {
  label: string;
  value: string;
}

const NewTask: React.FC<Props> = props => {
  const navigation = useNavigation<StatisticsNavigatorPropList>();
  const { navigate, setOptions, goBack } = navigation;
  const { uid } = useAuth();
  const [categoryList, setCategoryList] = useState<CategorieLocal[]>();

  const createTaskForm = useForm<NewTaskConfig>({
    mode: "onChange"
    // resolver: yupResolver()
  });

  const { watch, reset, setValue, register, handleSubmit } = createTaskForm;

  const handleSaveTask = useCallback(
    async (values: NewTaskConfig) => {
      if (!uid) return;
      await createTask({
        uid,
        task: {
          ...values
        }
      });
      reset();
      navigate("Home", {});
    },
    [navigate, reset, uid]
  );

  useEffect(() => {
    firestore()
      .collection("users")
      .doc(uid)
      .collection("categories")
      .get()
      .then(values => {
        const docs = values.docs;
        if (docs.length === 0) return;

        const data = docs.map(doc => ({
          label: doc.data().categoryName,
          value: doc.data().categoryName
        }));

        setCategoryList(data);
      });
  }, [uid]);

  useEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen
          onPressLeftButton={goBack}
          primaryTitle={"Escribir tarea"}
          rightImage={<CheckSVG />}
          onPressRightButton={handleSubmit(values => {
            handleSaveTask(values);
          })}
        />
      )
    });
  }, [setOptions, goBack, handleSaveTask, handleSubmit]);

  return (
    <View style={styles.container}>
      <FormProvider {...createTaskForm}>
        <View style={styles.item}>
          <TextBox
            label="Descripción"
            type="text"
            returnKeyType="next"
            {...register("description")}
            placeholder="Jesus"
            textBoxStyle={styles.input}
            labelStyle={styles.textInput}
            placeholderTextColor={$palette.gray3}
          />

          <TextBox
            label="Fecha"
            type="text"
            returnKeyType="next"
            {...register("date")}
            placeholder="23/08"
            textBoxStyle={styles.input}
            labelStyle={styles.textInput}
            placeholderTextColor={$palette.gray3}
          />

          <Select
            style={styles.input}
            labelStyle={styles.textInput}
            name="category"
            label="Categoría"
            items={
              categoryList ?? [{ value: "-1", label: "Seleccione un valor" }]
            }
          />
        </View>

        <View style={styles.containerPriority}>
          <Text style={styles.priorityTitle}>Prioridad</Text>
          <View style={styles.containerPrioritys}>
            <TouchableOpacity
              style={[
                styles.containerPriorityButton,
                watch("priority") === "1" ? styles.selected : null
              ]}
              onPress={() => setValue("priority", "1")}
            >
              <HightPrioritySVG />
              <Text style={styles.containerPriorityText}>Alta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containerPriorityButton,
                watch("priority") === "2" ? styles.selected : null
              ]}
              onPress={() => setValue("priority", "2")}
            >
              <MediumPrioritySVG />
              <Text style={styles.containerPriorityText}>Media</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containerPriorityButton,
                watch("priority") === "3" ? styles.selected : null
              ]}
              onPress={() => setValue("priority", "3")}
            >
              <LowPrioritySVG />
              <Text style={styles.containerPriorityText}>Baja</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FormProvider>
    </View>
  );
};

NewTask.defaultProps = {};

export default NewTask;
