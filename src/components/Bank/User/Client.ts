import User from ".";
import Account from "../Account";
import { Defaults } from "../Account/constants";

export default class Client extends User {
  private accounts: Account[] = [];

  constructor(params: any) {
    super(params);
    this.accounts.push(
      new Account(Defaults.ACCOUNT_NAME, String(Math.random()))
    );
  }

  private getAccountByName = (name: string) =>
    this.accounts.find((acc) => acc.name === name);

  addCard = (cardName: string, accountName = Defaults.ACCOUNT_NAME) => {
    const account = this.getAccountByName(accountName);
    if (account) {
      account.addCard(cardName);
      return true;
    }
    return false;
  };

  increaseBalance = (value: number, accountName = Defaults.ACCOUNT_NAME) => {
    const account = this.getAccountByName(accountName);
    if (account) {
      account.increaseBalance(value);
    }
  };

  decreaseBalance = (value: number, accountName = Defaults.ACCOUNT_NAME) => {
    const account = this.getAccountByName(accountName);
    if (account) {
      account.decreaseBalance(value);
    }
  };

  transfer = ({
    accountName = Defaults.ACCOUNT_NAME,
    client,
    value,
  }: {
    accountName?: string;
    client: Client;
    value: number;
  }) => {
    const account = this.getAccountByName(accountName);
    if (!account) return false;

    client.increaseBalance(value);
    this.decreaseBalance(value);

    return true;
  };
}
