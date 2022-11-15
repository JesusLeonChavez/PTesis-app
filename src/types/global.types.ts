export interface Category {
  name: string;
  quantity: number;
}

export interface Task {
  description: string;
  priority: string;
  date: string;
  checked: boolean;
  category: string;
  id: string;
}
