export interface TableProps<DataType> {
  columns: TableColumn<DataType>[];
  data: DataType[];
  isSelectable?: boolean;
  onChangeSelectedRows?: (selectedRows: DataType[]) => void;
}

export interface TableColumn<DataType> {
  title: string;
  accessor: Accessor<DataType>;
}

export type Accessor<DataType> = ((field: DataType) => string) | keyof DataType;
