let { pwd } = require('./pwd.js');
let { ls } = require('./ls.js');
let { cat } = require('./cat.js');
let { curl } = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    let filename = cmd.slice(4);

    cat(filename);
  } else if (cmd.slice(0, 4) === 'curl') {
    let sitename = cmd.slice(5);

    curl(sitename);
  }
});

