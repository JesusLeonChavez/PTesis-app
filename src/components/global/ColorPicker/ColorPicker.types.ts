// Interfaces and types from component ColorPicker

// Component Props
export interface ColorPickerProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
}
