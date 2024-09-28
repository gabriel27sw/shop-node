import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log('Welcome to the your Shopee Cart')

const item1 = await createItem("TV", 1200.99, 1);
const item2 = await createItem("Monitor", 2201.99, 2);
const item3 = await createItem("Oculos", 1200.99, 2);
const item4 = await createItem("Cooler", 1200.99, 5);
const item5 = await createItem("Fonte", 1200.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);

await cartService.removeItem(myCart, item5);


await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);