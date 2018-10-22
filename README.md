# gae-node-datastore

This repo is an example of how to get Node running on Google App Engine
Standard with Datastore, not only deployed to production, but also in a local
development environment.

## Local development

### Setup

1. Install `node`.
2. Install `yarn`.
2. Clone this repo.
3. Run `yarn` to install dependencies.
4. Run `gcloud components install cloud-datastore-emulator` to install the local
   Datastore emulator.

### Running local server

1. Run `yarn run dev:datastore`. Before proceeding, look for the following text
   in the output because the next step depends on the server being up and
   running:
   ```
   Dev App Server is now running
   ```
   (This runs the following command to start the local Datastore emulator:
   `gcloud beta emulators datastore start --project=<project-id>`. I'm not sure
   why this command requires a project ID, but I guess it doesn't hurt to
   provide it.)
   
2. Run `yarn run dev`. This runs the following commands in order:
   - `$(gcloud beta emulators datastore env-init)` sets necessary environment
     variables
   - `yarn serve` starts the node server


## Production

### Setup

1. Create a project from the [GCP Console][gcp-console] and note the project ID.
2. Install the `gcloud` command line tool.
3. Sign in via `gcloud auth login`.

### Deploying to GCP

1. Run `gcloud app deploy --project=<project-id>` (be sure to replace
   `<project-id>` with your project ID).
2. Run `gcloud app browse --project=<project-id>` to open it in your
   default browser.

[gcp-console]: http://console.cloud.google.com/
