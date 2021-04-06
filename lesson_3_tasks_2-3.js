var shopCart = {
    listOfProducts: [],
    countBasketPrice: function () {
        var resultPrice = 0
        for (i = 0; i < this.listOfProducts.length; i++) {
            resultPrice += this.listOfProducts[i].price;
        }
        return resultPrice
    }
}
var apple = {
    name: 'apple',
    price: 250
};

var strawbery = {
    name: 'strawbery',
    price: 850
};

var potato = {
    name: 'potato',
    price: 98
};

shopCart.listOfProducts.push(apple, strawbery, potato)

console.log(shopCart.countBasketPrice())