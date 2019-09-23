let request = require('request');

let curl = (sitename, done) => {
  request(sitename, (err, res, body) => {
    if (err) {
     done(err);
    }

    done(body);
  });
};

module.exports = {
  curl
};
