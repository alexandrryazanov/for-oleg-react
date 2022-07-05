export default class Card {
  private number: string;
  private name: string;
  private limit: number = 0;

  constructor(name: string, number: string) {
    this.number = number;
    this.name = name;
  }

  getLimit = () => this.limit;
  setLimit = (limit: number) => (this.limit = limit);
}
