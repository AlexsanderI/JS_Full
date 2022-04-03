class Wallet {
  _balance = 0;
  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("No enough funds");
      return;
    }
    this._balance -= amount;
  }
}

const wallet1 = new Wallet();
wallet1.deposit(20);
console.log(wallet1.getBalance());
wallet1.deposit(20);
wallet1.deposit(20);
console.log(wallet1.getBalance());
// wallet1.withdraw(70);
// console.log(wallet1.getBalance());
wallet1.withdraw(170);
