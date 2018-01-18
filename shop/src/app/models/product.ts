import { ProductCategory } from "../enums/index";

export class Product {
  constructor(public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public amount: number,
    public ingredients: string[],
    public equivalents: string[]) {
  }
}
