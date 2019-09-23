let request = require('request');

let curl = (sitename, done) => {
  request(sitename, (err, res, body) => {
    if (err) {
     done(er);
    }

    done(body);
  });
};

module.exports = {
  curl
};
