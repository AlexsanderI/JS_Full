/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return `${this._id}`;
  }

  get name() {
    return `${this._name}`;
  }

  get sessionId() {
    return `${this._sessionId}`;
  }

  // put your code here
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  // put your code here
  get users() {
    return this._users;
  }
  getUserNames() {
    return this.users.map((user) => user.name);
  }
  getUserIds() {
    return this.users.map((user) => user._id);
  }

  getUserNameById(id) {
    return this.users.find((user) => user._id === id).name;
  }
}

// examples
const user = new User("1", "Tom", "session-id");

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = "Bob"; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user1 = new User("1", "Alan", "1");
user1._name = "Ruslan";
user1._sessionId = "256";
user1._id = "25";
const user2 = new User("2", "Alex", "2");
const user3 = new User("3", "Roman", "3");
const user4 = new User("4", "Andrey", "4");
const user5 = new User("5", "Vasiliy", "5");

const newRepo = new UserRepository([user1, user2, user3, user4, user5]);

console.log(newRepo);
console.log(newRepo.getUserNames());
console.log(newRepo.getUserIds());
console.log(newRepo.getUserNameById("2"));
