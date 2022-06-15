export interface DropdownElementProps {
  title: string;
  changeIsSelectedElementList: (title: string) => void;
  selectedElementListTitle: string[];
}
