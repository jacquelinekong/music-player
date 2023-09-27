# Overview

For this exercise, I prioritized setting up a reusable Table component that could be used across the app, then I began filling out the app's functionality. My slicing leaned toward fulfilling as many of the listed assessment points as I could within the time slot (as opposed to, for instance, a product-focus vertical slicing). That being said, if I were implementing this in real life I would still begin with a reusable table component.

This app lacks interactivity but provides the basis for manipulating playlists and songs. The next slices would be to implement CRUD operations for playlists, then sorting and filtering for songs, then album views. I would also want to paginate the table so that the song list could scale. In terms of testing, I generally want to include a layer of shallow-render tests that act as unit tests, integration tests with mocked APIs, and end-to-end tests that talk to an actual sever.

The main point of assessment that I didn't have time to get to was the use of the listed hooks. My examples of useMemo prevent unnecessary playlist re-rendering (in the world where the playlists are editable). Given more time, I would use useCallback for caching table data for playlists/songs.

# TO RUN:

`npm install`
`npm start`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
