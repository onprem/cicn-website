# CICN 2020 Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

- You would need NodeJS and Yarn installed on your machine to run and build this website.

> Note: If you don't have node installed, you can use Docker to serve the website

### Install dependencies

- Run `yarn install` to install required node modules.

### Production deployment

#### Using source code

- Run `yarn build` to create the production build.
- The generated code can be found in the `build` folder.
- Deploy the `build` using any web server.
- A sample `Caddyfile` is provided to deploy using [`Caddy 2`](https://caddyserver.com/v2).
- Simply run `caddy run` and go to `localhost:8080` to access the website.

#### Using Docker

- You won't be needing node and yarn. You just need to install `docker` on your computer.
- Run `docker build -t cicn-web .` to build the container.
- Then simply run `docker run -p 8080:8080 cicn-web` to serve the website.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Local Development

- Run `yarn start` to run a development server at `localhost:3000`
