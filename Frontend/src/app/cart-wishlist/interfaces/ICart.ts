import { IProduct } from "src/app/landing-page/interfaces/IProduct";

export interface ICart {
  cartId: number;
  userId: number;
  productId: number;
  cartTotal: number;
  productName:string;
  imgURL:string;
  // product: IProduct;
}
