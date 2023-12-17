# IMPORTANT

There is a CORS issue when trying to call the endpoint from local. This should be fixed on the backend. In the meantime I used this browser extension to load the data [allow-cors-access-control](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf).

This app is deployed on [here](https://o9-nine.vercel.app/) (browser extension mentioned above is needed, due to cors issue)

## Next steps (further development)

1. Expand test coverage (only basic tests have been implemented due to time constraints)
2. Make modal more generic
3. Refactor framer motions (first time using it, need to do more investigation)

## Quick start

1. Clone this directory using git
2. `cd` into the root
3. run `npm install`
4. run `npm start`

### Testing

1. run `npm test`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
