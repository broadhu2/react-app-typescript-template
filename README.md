# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

My recommended IDE is [Visual Studio Code IDE](https://code.visualstudio.com/download). It offers a variety of extensions and has good defaults built-in. It also allows specifying workspace specific [settings](./.vscode/settings.json) and recommended suggestions for [extensions](./.vscode/extensions.json).

## Using HTTPS in Development
This app currently uses a [manual proxy configuration](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually) (defined inside [`src/setupProxy.js`](./src/setupProxy.js)) to proxy requests to external APIs. If you want to connect to an API instance running over HTTPS, you can enable the CRA webpack dev server to use HTTPS with a self-signed certificate for localhost domain. See [CRA Docs](https://create-react-app.dev/docs/using-https-in-development/) for more details.

1. Create a self-signed certificate for your OS. An easy way to do this is with the [`mkcert`](https://github.com/FiloSottile/mkcert) tool:
    ```
    mkdir .cert
    cd .cert
    mkcert -key-file key.pem -cert-file cert.pem -install localhost
    ```
1. Add the following properties to your root level `.env.development.local` file:
    ```
    HTTPS=true
    SSL_CRT_FILE=.cert/cert.pem
    SSL_KEY_FILE=.cert/key.pem
    ```
1. Allow self-signed certificates on localhost for your browser. In Chrome, type `chrome://flags/` into the URL bar, search for "localhost" and then set the value of the `Allow invalid certificates for resources loaded from localhost` flag to `Enabled`. You may need to reload the browser and refresh the page.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
