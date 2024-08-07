import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
}

const Products = {
    getAll: () => requests.get('products')
}

const Payments = {
    createPaymentIntent: (cart: object) => requests.post('payment', cart)
}

const Orders = {
    create: (cart: object) => requests.post('orders', cart)
}

const agent = {
    Products,
    Payments,
    Orders
}

export default agent;