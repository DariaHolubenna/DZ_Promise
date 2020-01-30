const request = require('request');

const prom = new Promise((resolve, reject) => {
  request('url', (error, response, body) => {
    resolve(body);
  });

  prom.then((body) => {
    console.log('done', body);
  }).catch((error) => {
    console.log(error);
  });
});
