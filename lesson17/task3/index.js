function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

// const sayHi = () => {
//   console.log("Hi");
// };

const deferredSayHi = defer(user.sayHi, 1000);

deferredSayHi.call({ name: "Joe" });
