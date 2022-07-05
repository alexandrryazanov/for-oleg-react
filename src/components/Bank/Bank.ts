import User from "./User";
import Client from "./User/Client";
import Admin from "./User/Admin";

export default class Bank {
  private users: User[] = [];

  createUser = ({
    name,
    isAdmin = false,
  }: {
    name: string;
    isAdmin?: boolean;
  }) => {
    const newUser = isAdmin
      ? new Admin({ name, isAdmin: true })
      : new Client({ name, isAdmin: false });

    this.users.push(newUser);

    return newUser;
  };

  getAllUsers = () => this.users;
}
