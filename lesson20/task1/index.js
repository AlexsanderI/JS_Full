class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    this.age = age;
    if (age >= 25) this.requestNewPhoto();
    if (age < 0) return false;
    return age;
  }

  static creatEmpry() {
    return new User("", null);
  }
}
const user1 = new User("Tom", 17);
const user2 = new User("Bob", 20);

console.log(user1);
user1.requestNewPhoto();
console.log(user1.setAge(26));
console.log(user1.setAge(0));
console.log(user1.setAge(-1));
console.log(user1.creatEmpry("Bob", 20));

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (age) {
//   this.age = age;
//   if (age >= 25) this.requestNewPhoto();
//   if (age < 0) return false;
//   return age;
// };
