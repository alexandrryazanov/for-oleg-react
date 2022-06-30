import Cup from ".";

export default class FunnelCup extends Cup {
  private holeSize: "sm" | "lg";
  constructor(
    name: string,
    size: "sm" | "lg",
    color: string = "black",
    price: number,
    holeSize: "sm" | "lg"
  ) {
    super(name, size, color, price);
    this.holeSize = holeSize;
  }

  getPrice = () => (this.holeSize === "lg" ? this.price * 10 : this.price);
}
