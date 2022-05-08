const obj = {
  number: 17,
  getNumber: function () {
    console.log(this.number);
    console.log(obj.number);
  },
};

// obj.getNumber();

// const func = obj.getNumber();
const func = obj.getNumber.bind(obj);
func();
// console.log(func());
