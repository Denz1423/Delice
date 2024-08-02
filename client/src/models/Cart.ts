export interface CartProduct {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    quantity: number;
}


export interface Cart {
    products: CartProduct[];
    paymentIntentId?: string;
    clientSecret?: string;
}