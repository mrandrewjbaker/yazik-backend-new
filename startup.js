//dependancies
require("dotenv").config({ path: "./env/.env" });
const os = require("os");
const { exec, execSync } = require("child_process");

//Database config
const db = require("./config/config");

console.log("Starting Yazik...");

const serverPath = "./src/server.ts";

const startupDatabase = async (cleanDatabase) => {
  const startupDatabaseCommand = cleanDatabase
    ? "sequelize db:drop && sequelize db:create"
    : "sequelize db:create";
  console.log("\x1b[32m%s\x1b[0m", `Executing startup database command`);
  try {
    const execStartupDatabaseCommand = execSync(startupDatabaseCommand);
    console.log("\x1b[32m%s\x1b[0m", `Startup database command executed`);
  } catch {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Error executing startup database command"
    );
  }
};

const startupTypescript = async () => {
  const startupTypescriptCommand = "tsc -p tsconfig.json";
  console.log("\x1b[32m%s\x1b[0m", `Executing startup typescript command`);
  try {
    const execStartupTypescriptCommand = execSync(startupTypescriptCommand);
    console.log("\x1b[32m%s\x1b[0m", `Startup typescript command executed`);
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `Error executing startup typescript command`
    );
  }
};

const startupDatabaseMigrations = async () => {
  const startupDatabaseMigrationsCommand =
    "sequelize db:migrate --migrations-path ./src/migrations";
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Executing startup database migrations command`
  );
  try {
    const execStartupDatabaseMigrationsCommand = execSync(
      startupDatabaseMigrationsCommand
    );
    console.log(
      "\x1b[32m%s\x1b[0m",
      `Startup database migrations command executed`
    );
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Error executing startup database migrations command"
    );
  }
};

const startupDatabaseSeeders = async () => {
  const startupDatabaseSeedersCommand =
    "sequelize db:seed --seeders-path ./src/seeders";
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Executing startup database seeders command`
  );
  try {
    const execStartupDatabaseSeedersCommand = execSync(
      startupDatabaseSeedersCommand
    );
    console.log(
      "\x1b[32m%s\x1b[0m",
      `Startup database seeders command executed`
    );
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Error executing startup database seeders command"
    );
  }
};

const nodeEnvCommand = os.type() === "Windows_NT" ? "set" : "export";
require("./config/config");

if (process.env.NODE_ENV === "production") {
} else {
  let cleanDatabase = false;
  console.log(process.argv);
  if (process.argv[2] && process.argv[2] === "test") {
    process.env.NODE_ENV = "test";
    cleanDatabase = true;
  }
  if (process.argv[2] && process.argv[2] === "clean") {
    cleanDatabase = true;
  }

  startupDatabase(cleanDatabase);
  startupTypescript();
  startupDatabaseMigrations();
  startupDatabaseSeeders();
}
