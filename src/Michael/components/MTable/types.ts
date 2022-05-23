export interface MTableProps<MDataType> {
  columns: MTableColumn<MDataType>[];
  data: MDataType[];
  isSelectable?: boolean;
  onChangeSelectedRows?: (selectedRows: MDataType[]) => void;
}

export interface MTableColumn<MDataType> {
  title: string;
  accessor: ((field: MDataType) => string) | keyof MDataType;
}
