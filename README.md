# aether-fe

## Setup
Requirements:
* Yarn

## Dev scripts
* `yarn run devstart` - Start an instance of the app at `localhost:3000` using [nodemon](https://nodemon.io/) to watch for changes in server code and automatically restart.
* `yarn run build-css` - Using [Dart Sass](https://sass-lang.com/dart-sass), compile stylesheets in `src/stylesheets` to the served css, and watch for changes to automatically recompile.
* `yarn run build-js` - Using [Babel](https://babeljs.io), compile (front-end) javascript files in `src/javascripts` to the served app, and watch for changes to automatically recompile.
* `yarn run dev` - Run the three scripts above in parallel.
