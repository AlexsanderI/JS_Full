const delay = (msc) => {
  const request = new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, msc);
  });
  return request;
};

delay(1000).then(() => console.log('Done'));
