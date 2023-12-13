## Getting Started

express API with typeORM, Mysql and node 18.x 

## Quick Start for develoment mode only

  Install dependencies:

```console
$ npm install
```

  Start the server in dev mode:

```console
$ npm run dev
```

View the website at: http://localhost:5000


Before running the server you must:

-   STEP 1: Create a developer account at Spotify: https://developer.spotify.com/ and follow the instraccions to create an application [link](https://developer.spotify.com/documentation/web-api/concepts/apps), then obtein the spoty_client_id and the spotify_key_secret strings to connect to the api.

-   STEP 2: create your own local Mysql service, or use an online tool mysql free tool, for example [Kamatera.com](https://www.hostingadvice.com/visit-site/?offer=62234&cat=cheap) and get the mysql connection details to save them into a .dev file. This repo uses an AWS RDS Mysql instance.

-   STEP 3: create an .env file as the example bellow in the root app directory.

```console
    DB_HOST = [string]
    DB_PORT = [number]
    DB_USER = [string]
    DB_PASSWORD = [string]
    DB_NAME = [string]
    SPOTIFY_CLIENT_ID = [string]
    SPOTIFY_SECRET_KEY = [string]
```

- STEP 4: once created the .env file you can start run the application

```console
$ npm run dev
```




Author: Giovany Perez, geovanypeb@outlook.com
