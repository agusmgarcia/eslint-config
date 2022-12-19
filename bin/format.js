#! /usr/bin/env node
const run = require("./run");

run("next lint --dir . --fix && prettier --write .");
