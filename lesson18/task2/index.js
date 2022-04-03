//put your code here
const wallet = {
  transactions: [1, 5, -66, 8, 55, 400],
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
  getMax() {
    return Math.max(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
