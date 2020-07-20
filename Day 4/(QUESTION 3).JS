/*Imagine you are going out to do some grocery shopping.
So you have an array called shoppingList with all the products you want to buy.
Now that you are inside of the shop, you have a basket with all the products from your list, but you want to
add a few more.
Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some
new products into it.*/

console.log("Hello!");
let ShoppingList = ["Milk","cheese","yoghurt","cookies","coffee","tea powder","chocolates"," bread loaf","dryfruits"];
let ShoppingBasket = ShoppingList
let shoppingBasket = [...ShoppingList,"pulses","vegetables","dates","oil & ghee","custard powder","skimmed milk","maggi","tomato sauce,"];
console.log(shoppingBasket);