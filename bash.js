let { pwd } = require('./pwd.js');
let { ls } = require('./ls.js');
let { cat } = require('./cat.js');
let { curl } = require('./curl.js');
let done;

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    let filename = cmd.slice(4);

    cat(filename, done);
  } else if (cmd.slice(0, 4) === 'curl') {
    let sitename = cmd.slice(5);

    curl(sitename, done);
  }
});

done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');  
};

