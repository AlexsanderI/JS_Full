window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;

const member = '{"name": "Joe"}';

try {
  const user = JSON.parse(member);
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

const product = '{"type": "Juse"}';

try {
  const product = JSON.parse(product);
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}

// const jey = '{"name": "Tom"}';
// console.log(jey);

// console.log(JSON.parse(jey));
