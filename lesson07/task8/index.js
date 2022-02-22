
const withdraw = (clients, balances, client, amount) => {
  let result = 0;
  clients.forEach(function(name,index){
if(name.includes(client) && balances[index] >= amount){ 
    result = balances[index] - amount
  }else 
  if(name.includes(client) && balances[index] < amount)
  { 
    result = -1;
  }
   
});
   return result;
};
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
