export interface TableProps {
  columns: TableColumn[];
  data: any[];
  isSelectable?: boolean;
  onChangeSelectedRows?: (selectedRows: any[]) => void;
}

export interface TableColumn {
  title: string;
  accessor: ((field: any) => string) | string;
}
