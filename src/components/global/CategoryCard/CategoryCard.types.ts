// Interfaces and types from component TabIcon

import { Category } from "types/global.types";

export interface CategoryCardProps {
  categorie: Category;
  handlePress: (categoryName: string) => void;
}
