import { ComplectInterface } from "../types";

export default class Cup implements ComplectInterface {
  private size: "sm" | "lg";
  private color: string;
  private name: string;
  protected price: number;

  constructor(
    name: string,
    size: "sm" | "lg",
    color: string = "black",
    price: number
  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.price = price;
  }

  getPrice = () => {
    return this.price;
  };
}
