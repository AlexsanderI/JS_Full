const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
  'https://server.com/ua',
];

const getUserASAP = (userId) => {
  const userURLs = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);

  const requests = userURLs.map((userUrl) => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then((res) => console.log(res));
