let fs = require('fs');

function cat(filename, done) {
  fs.readFile('./' + filename, 'utf8', (err, data) => {
    if (err) {
      done(err);
    }

    done(data);   
  });
}

module.exports = {
  cat
};
