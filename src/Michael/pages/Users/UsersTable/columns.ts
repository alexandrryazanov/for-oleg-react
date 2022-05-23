import { MTableColumn } from "../../../components/MTable/types";
import { UserData } from "./types";

export const columns: MTableColumn<UserData>[] = [
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
