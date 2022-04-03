const user = {
  firstName: "John",
  lastName: "Doe",
};

user.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

user.setFullName = function (name) {
  const nameArray = name.split(" ");
  this.firstName = nameArray[0];
  this.lastName = nameArray[1];
  return `${this.firstName} ${this.lastName}`;
};

user.getFullName();
console.log(user.setFullName("Bruce Swone"));
