import Card from "./Card";
import { Defaults } from "../Account/constants";

export default class Account {
  public name: string;
  private balance: number = 0;
  private number: string;
  private cards: Card[] = [];

  constructor(name: string, number: string) {
    this.name = name;
    this.number = number;
    this.cards.push(new Card(Defaults.CARD_NAME, String(Math.random())));
  }

  addCard = (name: string) =>
    this.cards.push(new Card(name, String(Math.random())));

  getBalance = () => this.balance;

  increaseBalance = (value: number) => (this.balance += value);
  decreaseBalance = (value: number) => (this.balance -= value);
}
