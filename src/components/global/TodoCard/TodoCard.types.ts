// Interfaces and types from component TabIcon

/**
 * Tab card props interface.
 *
 * @interface TodoCardProps
 * @since 1.0.0
 */
export interface TodoCardProps {
  description: string;
  priority: string;
  date: string;
  checked: boolean;
  id: string;
  onCheck?: (prevValue: boolean, id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}
