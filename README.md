# express-base
Blank Express application with several libraries pre-configured.

## Stack
* [**Express**](https://expressjs.com/) - Node.js web framework.
* [**React**](https://reactjs.org/) - Front end UI framework and templating engine using JSX.
* [**Sass**](https://sass-lang.com/dart-sass) - CSS extension language.
* [**Webpack**](http://webpack.js.org/) - Asset bundler.
* [**Jest**](https://jestjs.io/) - Testing framework.

## Setup
```
yarn install
```

## Dev scripts
* `yarn run devstart` - Start an instance of the app at `localhost:3000` using [nodemon](https://nodemon.io/) to watch for changes in server code and automatically restart.
* `yarn run watch-css` - Using [Dart Sass](https://sass-lang.com/dart-sass), compile stylesheets in `src/stylesheets` to the served css, and watch for changes to automatically recompile.
* `yarn run watch-js` - Using [Webpack](https://webpack.js.org/), compile (front-end) javascript files in `src/javascripts` to the served front-end app, and watch for changes to automatically recompile.
* `yarn run dev` - Run the three scripts above in parallel.

## Writing code
* `/routes` - Routes ("controller" actions)
* `/views` - Views
* `/src/stylesheets` - Served styles
* `/src/javascripts` - Served javascript
