module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;
  this.donation = oldCart.donation || 0;
  this.orderId;

  this.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {item: item, qty: 0, price: 0, donation: 0};
    }
    storedItem.qty += 1;
    storedItem.donation += 1;
    storedItem.price = storedItem.item.price * (storedItem.qty + storedItem.donation) ;
    this.totalQty += 1;
    this.totalPrice += storedItem.item.price;
    this.orderId = Math.floor(Math.random() * (100000 - 98885) + 98885)
  }
  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };

};