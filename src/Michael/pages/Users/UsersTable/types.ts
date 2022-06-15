export interface UsersTableProps {
  data: UserData[];
  offset: number;
  setOffset: (item: number) => void;
  limit: number;
  setLimit: (item: number) => void;
}

export interface UserData {
  id: number;
  email: string;
  website: string;
  phone: string;
  username: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
  };
}
