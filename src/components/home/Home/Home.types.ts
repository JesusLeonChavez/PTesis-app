// Interfaces and types from component Home
import { StyleProp, View } from "react-native";

// Component Props
export interface HomeProps {}

export interface FloatingMenuItem {
  id: MenuItem;
  label: string;
  labelStyle: StyleProp<View>;
  icon: React.ReactNode;
}

export interface MenuState {
  menuButtonDown: boolean;
}

export type MenuItem = typeof MenuItemEnum[keyof typeof MenuItemEnum];

export const MenuItemEnum = {
  CREATE_TASK: "CREATE_TASK",
  CREATE_LIST: "CREATE_LIST",
  CREATE_TAG: "CREATE_TAG"
} as const;
