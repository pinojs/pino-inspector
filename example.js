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
