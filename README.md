# pino-inspector

[![Build Status](https://dev.azure.com/pinojs/pino-inspector/_apis/build/status/pinojs.pino-inspector)](https://dev.azure.com/pinojs/pino-inspector/_build/latest?definitionId=1)

Send your pino logs to the node inspector!
This project piggybacks on
[pino-pretty](https://github.com/pinojs/pino-pretty).
It will send formatted logs to the terminal, and their JS version to the
console.

This module requires Node only on 10.12.0+.

## Install

```
npm i pino pino-inspector
```

## Usage

```js
'use strict'

const pinoInspector = require('.')

const pino = require('pino')({
  level: 'debug',
  prettyPrint: true,
  prettifier: pinoInspector
})

pino.info({ my: 'obj' }, 'hello')

setInterval(function () {
  pino.info('a second has passed')
}, 1000)

setInterval(function () {
  pino.debug('750 millis has passed')
}, 750)

setInterval(function () {
  pino.warn('1500 millis has passed')
}, 2000)

setInterval(function () {
  pino.error('2 seconds has passed')
}, 2000)
```

## TODO

* [ ] unit tests, turns out that connecting to the inspector is hard
* [ ] better format for the browser

## License

MIT
