import { Task } from "types/global.types";

export interface Tag {
  name: string;
  color: string;
}

export interface CreateTagConfig {
  uid: string;
  tag: Tag;
}

export interface CreateCategoryConfig {
  uid: string;
  categoryName: string;
}

export interface CreateTaskConfig {
  uid: string;
  task: Pick<Task, "category" | "date" | "description" | "priority">;
}
