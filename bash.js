let { pwd } = require('./pwd.js');
let { ls } = require('./ls.js');
let { cat } = require('./cat.js');
let { curl } = require('./curl.js');
let { echo } = require('./echo.js');
let done;

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(cmd.slice(4), done);
  } else if (cmd.slice(0, 4) === 'curl') {
    curl(cmd.slice(5), done);
  } else if (cmd.slice(0, 4) === 'echo') {
    echo(cmd.slice(5), done);
  }
});

done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');  
};

