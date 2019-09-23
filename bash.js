let { pwd } = require("./pwd.js");
let { ls } = require("./ls.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  }
});

