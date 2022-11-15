import firestore from "@react-native-firebase/firestore";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import styles from "./Notes.styles";
import { NotesProps as Props } from "./Notes.types";
import TodoCard from "components/global/TodoCard/TodoCard";
import useAuth from "contexts/auth/auth.hooks";
import { deleteTask, toggleTask } from "services/notes/notes.services";
import { Task } from "types/global.types";

const Notes: React.FC<Props> = props => {
  const { categoryName } = props;
  const { uid } = useAuth();
  const [notes, setNotes] = useState<Task[]>();

  const onCheck = async (prevValue: boolean, id: string) => {
    if (!uid) return;

    await toggleTask(prevValue, id, uid);
  };

  const onDelete = async (id: string) => {
    if (!uid) return;

    await deleteTask(id, uid);
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("users")
      .doc(uid)
      .collection("tasks")
      .where("category", "==", categoryName)
      .onSnapshot(async snapshot => {
        const tasks = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        })) as Task[];

        setNotes(tasks);
      });

    return unsubscribe;
  }, [categoryName, uid]);

  return (
    <View style={styles.container}>
      {notes
        ? notes.map(note => {
            const { checked, date, id, description, priority } = note ?? {};

            return (
              <TodoCard
                key={id}
                checked={checked}
                date={date}
                description={description}
                id={id}
                priority={priority}
                onCheck={onCheck}
                onDelete={onDelete}
              />
            );
          })
        : null}
    </View>
  );
};

Notes.defaultProps = {};

export default Notes;
