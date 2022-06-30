import { ComplectInterface } from "../types";

export default class Hookah {
  private size: "sm" | "lg";
  private color: string;
  private readonly name: string;
  private margin = 2;
  private complect: ComplectInterface[] = [];

  constructor(name: string, size: "sm" | "lg", color: string = "black") {
    this.name = name;
    this.size = size;
    this.color = color;
  }

  blow = () => {
    console.log("Я дую кальян " + this.name);
  };

  changeMargin = (marg: number) => (this.margin = marg);

  addComplect = (comp: any) => this.complect.push(comp);

  getPrice = () => {
    return (
      this.complect.reduce((acc, comp) => acc + comp.getPrice(), 0) *
      this.margin
    );
  };
}
