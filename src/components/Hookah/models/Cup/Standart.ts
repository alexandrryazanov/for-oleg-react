import Cup from ".";

export default class StandardCup extends Cup {
  constructor(
    name: string,
    size: "sm" | "lg",
    color: string = "black",
    price: number
  ) {
    super(name, size, color, price);
  }
}
