const execSync = require("child_process").execSync;
const fs = require("fs");

module.exports = function run(command) {
  const pagesExists = fs.existsSync("pages");
  if (!pagesExists) fs.mkdirSync("pages");

  const dotNextExists = fs.existsSync(".next");

  try {
    execSync(command, { encoding: "utf-8" });
  } catch (error) {
    if (!!error.stdout) process.stderr.write(error.stdout);
  } finally {
    if (!dotNextExists) fs.rmSync(".next", { force: true, recursive: true });
    if (!pagesExists) fs.rmSync("pages", { force: true, recursive: true });
  }
};
