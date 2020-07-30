var shopper = {
  fullName: "",
  storeMember: false,
  items: 0,
  groceryCart: ['oranges', 'apples', 'carrots', 'kale'],
  addToCart: function (groceryCart) {
    /*Adding the items to grocery cart*/
    this.groceryCart = this.groceryCart.concat(groceryCart);

    this.items = this.groceryCart.length;
    /*items sit in cart here*/
    console.log('Items in cart', this.groceryCart);
    /*shows completed amount of items*/
    console.log('Num of items in cart', this.items);

    return;
  },
};
console.log('Shopper cart', shopper.groceryCart);

shopper.fullName = "Mike Lamb";
/*Array of items will be added additionally to the cart*/
shopper.addToCart(['apples', 'oranges', 'kale']);

console.log('Shopper name is', shopper.fullName);
console.log('Shopper cart', shopper.groceryCart);
console.log('Shopper items', shopper.items);


