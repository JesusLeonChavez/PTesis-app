import firestore from "@react-native-firebase/firestore";

import { CreateTaskConfig } from "./notes.services.types";
import { CreateCategoryConfig, CreateTagConfig } from "./notes.services.types";

export const createTag = async (tagConfig: CreateTagConfig) => {
  const { tag, uid } = tagConfig;

  await firestore().collection("users").doc(uid).collection("tags").add(tag);
};

export const createCategory = async (categoryConfig: CreateCategoryConfig) => {
  const { uid, categoryName } = categoryConfig;

  await firestore()
    .collection("users")
    .doc(uid)
    .collection("categories")
    .add({ categoryName });
};

export const createTask = async (taskConfig: CreateTaskConfig) => {
  const { uid, task } = taskConfig;

  await firestore()
    .collection("users")
    .doc(uid)
    .collection("tasks")
    .add({ ...task });
};

export const toggleTask = async (
  prevValue: boolean,
  taskId: string,
  uid: string
) => {
  await firestore()
    .collection("users")
    .doc(uid)
    .collection("tasks")
    .doc(taskId)
    .update({ checked: !prevValue });
};

export const deleteTask = async (taskId: string, uid: string) => {
  await firestore()
    .collection("users")
    .doc(uid)
    .collection("tasks")
    .doc(taskId)
    .delete();
};
