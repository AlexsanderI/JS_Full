function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  this.age = age;
  if (age >= 25) this.requestNewPhoto();
  if (age < 0) return false;
  return age;
};

const user1 = new User("Tom", 17);
const user2 = new User("Bob", 20);

console.log(user1);
user1.requestNewPhoto();
console.log(user1.setAge(26));
console.log(user1.setAge(0));
console.log(user1.setAge(-1));
