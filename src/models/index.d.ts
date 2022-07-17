// import {ModelInit, MultableModel, PersistentModelConstructor} from "aws-amplify/datastore";

export declare class PaymentIntent{
    private clientSecret:string;
    // constructor(init:ModelInit<PaymentIntent>);
}

export declare class Product{
    private id : string;
    private title:string;
    private description?: string;
    private image: string;
    private images: string[];
    private options?: string[];
    private avgRating?: number;
    private ratings?: number;
    private price: number;
    private oldPrice?: number;
    constructor(id: number, title: string, description:string, image:string, images:string, options:string, avgRating:number, ratings:number, price: number, oldPrice:number) {
    this.id = id;
    this.title= title;
    this.description = description;
    this.image = image;
    this.images=images;
    this.options=options;
    this.avgRating=avgRating;
    this.ratings=ratings;
    this.price=price;
    this.oldPrice=oldPrice;

  }
    // constructor(init: ModelInit<Product>)
    // static copyOf(source:Product, mutator:(draft:MultableModel<Product>)=> MultableModel<Product> | void): Product;

}

export declare class CartProduct{
    private id: string;
    private userSub:string;
    private quantity: number;
    private option?: string;
    private productID: string;
    private product?: Product;

    constructor(id: number, title: string, userSub:string, quantity:number, option:string, productID:string, ratings:string,product:Product) {
    this.id = id;
    this.userSub= title;
    this.quantity = quantity;
    this.option = option;
    this.productID=productID;
    this.product=Product;
  }
    // constructor (init : ModelInit<CartProduct>);
    // static copyOf(source:CartProduct, mutator: (draft: MultableModel<CartProduct>)=> MultableModel<CartProduct> | void) : CartProduct;
}

export declare class OrderProduct{
    private id: string;
    private quantity: number;
    private option?: string;
    private productID:string;
    private product?:Product;
    private orderID?:string;
    private order?: Order;
    // constructor(init: ModelInit<OrderProduct>);
    // static copyOf(source:OrderProduct, mutator: (draft: MultableModel<OrderProduct>) => MultableModel<OrderProduct> | void) : OrderProduct;

}

export declare class Order{
    private id:string;
    private userSub:string;
    private fullName:string;
    private phoneNumber?:string;
    private country?:string;
    private city?:string;
    private address?:string;
    // constructor(init: ModelInit<Order>);
    // copyOf(source:Order, mutator:(draft:MultableModel<Order>)=> MultableModel<Order> | void): Order;
    
}