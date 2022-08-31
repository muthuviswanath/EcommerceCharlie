export interface IOrder {
  orderId: number;
  userId: number;
  productId: number;
  orderDate: Date;
  productName: string;
  productDescription: string;
  productRating: number;
  productOfferPrice: number;
  imgURL: string;
}
