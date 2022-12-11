#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

async function runCommand(command) {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.log(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
}

if (process.argv.length < 3) {
  console.log("Please specify the target project directory.");
  console.log("For example:");
  console.log("    npx @nabadeep25/create-ts-node-app my-app");
  process.exit(1);
}

const currentPath = process.cwd();
const folderName = process.argv[2];
const appPath = path.join(currentPath, folderName);
const repo =
  "https://github.com/nabadeep25/typescript-node-sequelize-boilerplate.git";

try {
  fs.mkdirSync(appPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      "Folder already exists. Please choose another name for the project."
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function setup() {
  try {
    // Clone repo
    console.log(`Downloading files from  ${repo}`);
    let cloned = runCommand(`git clone --depth 1 ${repo} ${folderName}`);
    if (!cloned) process.exit(-1);
    console.log("Cloned successfully.\n");

    process.chdir(appPath);

    console.log("Installing dependencies...\n");
    runCommand("npm install");

    console.log("Dependencies installed successfully.\n");

    fs.copyFileSync(
      path.join(appPath, ".env.example"),
      path.join(appPath, ".env")
    );
    console.log("Environment files copied.\n");

    runCommand("npx rimraf ./.git");

    fs.unlinkSync(path.join(appPath, "bin", "cli.js"));
    fs.rmdirSync(path.join(appPath, "bin"));

    console.log("Installation is now complete!\n");
    console.log("To start developing  follow :");
    console.log(`    cd ${folderName}`);
    console.log("    npm run watch");
    console.log();
    console.log("🎉 Happy coding 💻!");
  } catch (error) {
    console.log(error);
  }
}

setup();
