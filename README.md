# gae-node-datastore

This repo is an exploration of getting Node running on Google App Engine
Standard with Datastore. The goal is for this to work not only when deployed to production, but also in a local development environment.

## Local development

### Setup

1. Install `node` and (optionally) `yarn`.
2. Clone this repo.
3. Run `yarn` or `npm install` to install dependencies.

### Running local server

1. Run `yarn serve`.


## Production

### Setup

1. Create a project from the [GCP Console][gcp-console] and note the project ID.
2. Install the `gcloud` command line tool.
3. Sign in via `gcloud auth login`.

### Deploy

1. Run `gcloud app deploy --project=<project-id>` (be sure to replace
   `<project-id>` with your project ID).
2. Run `gcloud app browse --project=<project-id>` to open it in your
   default browser.



[gcp-console]: http://console.cloud.google.com/
