// "use strict";
const event = {
  message: "Welcome to the party!",
  guests: [
    { name: "John", age: 18, email: "example@server.com" },
    { name: "Bob", age: 19, email: "first@server.com" },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());

// email: 'example@server.com', text: 'Dear John! Welcome to the party!'
