//dependancies
require("dotenv").config({ path: "./env/.env" });
const os = require("os");
const { exec, execSync } = require("child_process");

//Database config
const db = require("./config/config");

const httpServerPath = "./src/bin/www.ts";

const cliColors = {
  reset: "\x1b[0m",
  text: {
    red: "\x1b[31m",
    orange: "\x1b[33m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    indigo: "\x1b[35m",
    violet: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    black: "\x1b[90m",
  },
  background: {
    red: "\x1b[41m",
    orange: "\x1b[43m",
    yellow: "\x1b[43m",
    green: "\x1b[42m",
    blue: "\x1b[44m",
    indigo: "\x1b[45m",
    violet: "\x1b[46m",
    white: "\x1b[47m",
    gray: "\x1b[100m",
    black: "\x1b[100m",
  },
  bold: "\x1b[1m",
  underline: "\x1b[4m",
};

const startUpMessage = () => {
  process.stdout.write("\033c");
  console.log(
    cliColors.background.blue + "Starting up Yazik API..." + cliColors.reset
  );
  console.log(cliColors.background.blue + "version 0.1.0" + cliColors.reset);
};

const startupDatabase = async (cleanDatabase) => {
  const startupDatabaseCommand = cleanDatabase
    ? "sequelize db:drop && sequelize db:create"
    : "sequelize db:create";
  console.log(
    cliColors.text.orange +
      "Executing startup database command" +
      cliColors.reset
  );
  try {
    const execStartupDatabaseCommand = execSync(startupDatabaseCommand);
    console.log(
      cliColors.text.green +
        "   ✅ Startup database command executed successfully" +
        cliColors.reset
    );
  } catch {
    console.log(
      cliColors.text.red +
        "   ❌ Error executing startup database command" +
        cliColors.reset
    );
  }
};

const startupTypescript = async () => {
  const startupTypescriptCommand = "rm -rf ./dist/ && tsc -p tsconfig.json";
  console.log(
    cliColors.text.orange +
      "Executing startup typescript command" +
      cliColors.reset
  );
  try {
    const execStartupTypescriptCommand = execSync(startupTypescriptCommand);
    console.log(
      cliColors.text.green +
        "   ✅ Startup typescript command executed successfully" +
        cliColors.reset
    );
  } catch (error) {
    console.log(
      cliColors.text.red +
        "   ❌ Error executing startup typescript command" +
        cliColors.reset
    );
  }
};

const startupDatabaseMigrations = async () => {
  const startupDatabaseMigrationsCommand =
    "sequelize db:migrate --migrations-path ./dist/src/migrations";

  console.log(
    cliColors.text.orange +
      "Executing startup database migrations command" +
      cliColors.reset
  );
  try {
    const execStartupDatabaseMigrationsCommand = execSync(
      startupDatabaseMigrationsCommand
    );
    console.log(
      cliColors.text.green +
        "   ✅ Startup database migrations command executed successfully" +
        cliColors.reset
    );
  } catch (error) {
    console.log(
      cliColors.text.red +
        "   ❌ Error executing startup database migrations command" +
        cliColors.reset
    );
  }
};

const startupDatabaseSeeders = async () => {
  const startupDatabaseSeedersCommand =
    "sequelize db:seed:all --seeders-path ./dist/src/seeders";
  console.log(
    cliColors.text.orange +
      "Executing startup database seeders command" +
      cliColors.reset
  );
  try {
    const execStartupDatabaseSeedersCommand = execSync(
      startupDatabaseSeedersCommand
    );
    console.log(
      cliColors.text.green +
        "   ✅ Startup database seeders command executed successfully" +
        cliColors.reset
    );
  } catch (error) {
    console.log(
      cliColors.text.red +
        "   ❌ Error executing startup database seeders command" +
        cliColors.reset
    );
  }
};

const startupHttpServer = async () => {
  const startupServerCommand = `nodemon ${httpServerPath}`;
  console.log(
    cliColors.text.orange +
      "Executing startup HTTP Server command" +
      cliColors.reset
  );
  try {
    const execStartupServerCommand = execSync(startupServerCommand);
    console.log(
      cliColors.text.green +
        "   ✅ Startup HTTP Server command executed successfully" +
        cliColors.reset
    );
  } catch (error) {
    console.log(
      cliColors.text.red +
        "   ❌ Error executing startup HTTP Server command" +
        cliColors.reset
    );
  }
};

const nodeEnvCommand = os.type() === "Windows_NT" ? "set" : "export";
require("./config/config");

if (process.env.NODE_ENV === "production") {
} else {
  let cleanDatabase = false;
  if (process.argv[2] && process.argv[2] === "test") {
    process.env.NODE_ENV = "test";
    cleanDatabase = true;
  }
  if (process.argv[2] && process.argv[2] === "clean") {
    cleanDatabase = true;
  }

  startUpMessage();
  startupDatabase(cleanDatabase);
  startupTypescript();
  startupDatabaseMigrations();
  startupDatabaseSeeders();
}
