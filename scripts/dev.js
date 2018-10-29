#!/usr/bin/env node

const shell = require("shelljs");
const { oneLine } = require("common-tags");


shell.echo("Starting development environment");

const Command = {
  // Starts local Datastore emulator. Not sure why, but project ID is required.
  DATASTORE_EMULATOR: oneLine`
    gcloud beta emulators datastore start --project=gae-node-datastore
  `,
  // Returns environment variables to access Datastore emulator server.
  DATASTORE_EMULATOR_ENV: oneLine`
    gcloud beta emulators datastore env-init
  `,
  // Starts app
  SERVE: oneLine`
    yarn run serve
  `,
};

function startEmulator() {
  // TODO: handle the case when the emulator fails to start
  return new Promise((resolve, reject) => {
    // Start Datastore emulator
    const emulator = shell.exec(Command.DATASTORE_EMULATOR, { async: true });
    
    emulator.stderr.on("data", (data) => {
      if (data.includes("Dev App Server is now running.")) {
        // resolve with environment vars for communication with local server
        resolve(
          shell.exec(Command.DATASTORE_EMULATOR_ENV, { silent: true })
            .split("\n")
            .map(line => line.replace("export ", ""))
        );
      }
    });
  });
}

startEmulator().then(vars => {
  // start app server
  shell.exec(`${vars.join(" ")} ${Command.SERVE}`);
});
