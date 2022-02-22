function getKeys(obj) {
  // put you code here
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      console.log(key);
    }
  }
}
console.log(getKeys({ hose: 15, city: "Odessa", contry: "Ukr" }));