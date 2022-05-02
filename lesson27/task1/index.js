console.log('hello');
localStorage.setItem('hobbies', JSON.stringify({ name: 'Alex' }));
localStorage.setItem('name', JSON.stringify('Junior'));
localStorage.setItem('age', JSON.stringify(21));
// function getLocalStoreData() {}
const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

console.log(getLocalStorageData());
