# gae-node-datastore

An example repo of a Node app running on Google App Engine Standard with
Datastore (including the local emulator). This repo was tested to work both in
production and in a local development environment. But if you find problems,
feel free to create an issue.

## Local development

### Prerequisites

To develop locally you will need `node`, `yarn`, and the `Java 8+ JRE` (needed
to run the datastore emulator). There are many ways to install these. Below is
the method I recommend for the simplest, most reliable installation on a Mac:

1. Install `node`. Go to [the Node.js website][node-download], download the
   official installer, and run it. Verify the installation with:
   
   ```sh
   node --version
   ```

2. Install Homebrew. Follow the instructions at [brew.sh](https://brew.sh/).
   
   Verify the installation with:
   
   ```sh
   brew --version
   ```
   
   Run the following command to detect possible problems:
   
   ```sh
   brew doctor
   ```
   
   If it recommends that you run `sudo chown` to take over any installation
   directories, do so. It's usually fine to ignore messages like `Warning:
   Unbrewed header files were found in /usr/local/include`.
   
3. Install `yarn`. The [official instructions][yarn-install] recommend
   installing view Homebrew. Since we already have Node installed, use a flag to
   exclude it.

   ```sh
   brew install yarn --without-node
   ```
   
   Verify the installation with:
   
   ```sh
   yarn --version
   ```
   
3. Install the `Java 8+ JRE`. We'll again use Homebrew because, unlike other
   methods, it just works.
   
   ```sh
   brew cask install java
   ```
   
   Verify the installation with:
   
   ```sh
   java -version
   ```

### Development setup

1. Clone this repo.
2. Run `yarn` to install dependencies.
3. Run `gcloud components install cloud-datastore-emulator` to install the local
   Datastore emulator.
4. Run `chmod +x ./scripts/*` to ensure everything in the `scripts` directory is
   executable.


### Run the local server

Start the local server via the `dev` script:

```sh
yarn run dev
```

This runs `scripts/dev.js`, which starts the Datastore emulator. Once it sees
the output text `Dev App Server is now running`, it starts the app server via
`yarn run serve`, passing necessary enviroment variables for communicating with
the Datastore emulator. We're using the `@google-cloud/datastore` library, so it
automagically picks up those environment variables and uses them to connect to
the emulator.


## Production

### Setup

1. Create a project from the [GCP Console][gcp-console] and note the project ID.
2. Install the `gcloud` command line tool.
3. Sign in via `gcloud auth login`.

### Deploy to GCP

1. Run `gcloud app deploy --project=<project-id>` (be sure to replace
   `<project-id>` with your project ID).
2. Run `gcloud app browse --project=<project-id>` to open it in your
   default browser.

[gcp-console]: http://console.cloud.google.com/
[node-download]: https://nodejs.org/en/download/
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/
