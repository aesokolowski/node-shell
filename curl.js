let request = require('request');

let curl = sitename => {
  request(sitename, (err, res, body) => {
    if (err) {
      throw err;
    }

    process.stdout.write(body);
    process.stdout.write('\nprompt > ');
  });
};

module.exports = {
  curl
};
