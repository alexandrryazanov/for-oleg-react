import { TableColumn } from "../../../components/Table/types";
import { UserData } from "../../../pages/Users/UsersTable/types";

export const columns: TableColumn<UserData>[] = [
  {
    title: "Ник",
    accessor: "username",
  },
  {
    title: "E-mail",
    accessor: "email",
  },
  {
    title: "Телефон",
    accessor: "phone",
  },
  {
    title: "Сайт",
    accessor: "website",
  },
  {
    title: "Компания",
    accessor: (userData) => userData.company.name,
  },
  {
    title: "Улица",
    accessor: (userData) => userData.address.street,
  },
];
