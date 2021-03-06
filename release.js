#!/usr/bin/env node

const {version} = require("./app/manifest.json");
const { execSync } = require("child_process");

const fileName = `../releases/linda-${version}.zip`;
// execSync throws in case of exit code other than 0
const out = execSync(`npm run build && mkdir -p releases && cd app && zip -r ${fileName} * -x app -q`);
console.log("Output:", out.toString()); // eslint-disable-line no-console
console.log("\x1b[34m%s\x1b[0m", `${fileName} created successfully`); // eslint-disable-line no-console
