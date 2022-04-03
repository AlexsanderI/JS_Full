// declare array
// iterate object's keys
// select keys from ownn object and remove metods (functions)
// insert into array keys
// return array

// getOwnProps
// input obj
// output array

// .push
// input keys
// output (keys) new length of array

function getOwnProps(obj) {
  // return Object.keys(obj);
  const array = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== "function") {
      array.push(prop);
    }
  }
  return array;
}

const vehicle = {
  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  // name: "Argo",
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};
Object.setPrototypeOf(ship, vehicle);
console.log(getOwnProps(ship));
