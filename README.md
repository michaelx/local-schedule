# local-schedule

NBA schedule with local times. Useful for fans watching from across the pond.

## Features

- Filter schedule by local times, e.g. show only games that start between 6am and 10pm your time. You can use the `up` and `down` arrow keys and `enter` to quickly adjust the filter. *(minutes are ignored by choice)*
- Export game as a calendar event. *(.ics)*
- View complete schedule.
- View period and score of active games. *(when data available)*

## Screenshot

![Filtered](https://github.com/michaelx/local-schedule/blob/master/docs/screenshots/filtered.png?raw=true)

## Usage and development

Clone the repository and change into its folder. Install dependencies:

```sh
npm install
```

Run with:

```
npm start
# will run at http://localhost:3000
```

To create a production build that you can self-host, or run from the file system:

```
npm run build
```

Afterwards copy everything from `./build` to your server, or just open `index.html`.

You can adjust the default config by editing the file `./src/config.js`.

### Code guidelines

Used style guides *(enforced with ESLint and stylelint)*:

- JavaScript: [airbnb-base](https://github.com/airbnb/javascript/tree/master/react)
- CSS: [michaelx/code-guide](https://github.com/michaelx/code-guide)

### Available scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so all its scripts are available.

```sh
npm start
npm test
npm run build
npm run eject
```

In addition I added:

```sh
npm run lint:js  # uses eslint airbnb-base
npm run lint:css # uses .stylelintrc
```

## Disclaimer

This project uses an inoffical API. Use at your own risk.

## Author

Michael Xander

- <https://michaelxander.com>
- <https://twitter.com/michaxndr>
