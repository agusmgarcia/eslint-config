#! /usr/bin/env node
const run = require("./run");
const fs = require("fs");

const typescript = fs.existsSync("tsconfig.json");
run(
  `next lint --dir . && prettier --check .${
    typescript ? "  && tsc --pretty --noEmit" : ""
  }`
);
