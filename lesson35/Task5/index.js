const product = '{"type": "Juse"}';
const tablet = JSON.stringify({ brend: 'Apple' });

const parseUser = (product) => {
  try {
    return (product = JSON.parse(product));
  } catch (el) {
    return null;
  }
};

console.log(parseUser(product));
console.log(parseUser(tablet));
