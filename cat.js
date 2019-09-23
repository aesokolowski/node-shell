let fs = require('fs');

function cat(filename) {
  fs.readFile('./' + filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  });
}

module.exports = {
  cat
};
