"use strict";

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
// export class Order {
//   // put your code here
//   constructor(price,id,city,)
// }

class Order {
  constructor(price, city, type) {
    this.id = `${Math.round(Math.random() * 1000)}`;
    this.price = price;
    this.city = city;
    this.type = type;
    // this.confirmed = "";
    this.dateConfirmed = "";
    this.dateCreated = new Date();
  }
  checkPrice() {
    if (this.price > 1000) {
      // console.log("Hello");
      return true;
    } else {
      // console.log("Not find");
      return false;
    }
  }
  confirmOrder() {
    this.confirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
      // } else {
      // this.type === "Sell";
    }
    return false;
  }
}

const order1 = new Order(2000, "Lviv", "Buy", 40);
order1.checkPrice();
order1.confirmOrder();
order1.isValidType();
console.log(order1);

const order2 = new Order(2300, "Odesa", "Sell");
order2.confirmOrder();
order2.isValidType();
console.log(order2);

const order3 = new Order(274, "Warsaw", "Buy");
order3.checkPrice();
order3.confirmOrder();
console.log(order3);
