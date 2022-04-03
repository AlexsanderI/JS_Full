class Order {
  constructor(price, city, type) {
    this.id = `${(Math.random() * 1000).toFixed()}`;
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }

  checkPrice() {
    return this.price > 1000 || false;
  }

  confirmOrder() {
    if (this.isConfirmed !== true) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === "Buy" || this.type === "Sell";
  }
}

const order1 = new Order(2, "Kharkov", "Buy", 40);
order1.checkPrice();
order1.confirmOrder();
order1.isValidType();
console.log(order1);

const order2 = new Order(200, "Odesa", "SeFXGll");
order2.confirmOrder();
order2.isValidType();
console.log(order2);

const order3 = new Order(230, "Kiev", "BuyKD;NM");
order2.confirmOrder();
console.log(order3);
