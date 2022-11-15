// Helpers for Home component

import styles from "./Home.styles";
import { FloatingMenuItem, MenuItemEnum } from "./Home.types";

// import DirectoryIconSVG from "assets/images/icons/directoryIcon.svg";
import PenIconSVG from "assets/images/icons/penIcon.svg";
import TagIconSVG from "assets/images/icons/tagIcon.svg";

const { CREATE_TASK, CREATE_LIST } = MenuItemEnum;

export const menuItems: FloatingMenuItem[] = [
  // {
  //   id: CREATE_TAG,
  //   label: "Crear etiqueta",
  //   labelStyle: styles.menuItem,
  //   icon: <DirectoryIconSVG />
  // },
  {
    id: CREATE_LIST,
    label: "Crear lista",
    labelStyle: styles.menuItem,
    icon: <TagIconSVG />
  },
  {
    id: CREATE_TASK,
    label: "Crear tarea",
    labelStyle: styles.menuItem,
    icon: <PenIconSVG />
  }
];
