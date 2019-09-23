let fs = require("fs");

function ls() {
    fs.readdir("./", "utf8", (err, files) => {
        if (err) {
            throw err;
        }
        process.stdout.write(files.join("\n"));
        process.stdout.write("\nprompt > ");
    });
}

module.exports = {
    ls
};
