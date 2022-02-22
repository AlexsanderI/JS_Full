//put your code here
export function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < 3; i++) {
    if (clients[i] === client) {
      if (balances[i] - amount > 0) {
        return (balances[i] -= amount);
      } else {
        return -1;
      }
    }
  }
}
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
