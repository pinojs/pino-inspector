'use strict'

const semver = require('semver')
const pinoPretty = require('pino-pretty')
const inspector = require('inspector')

module.exports = function pinoInspector (opts) {
  const pretty = pinoPretty(opts)

  if (semver.lt(process.version, '10.12.0')) {
    throw new Error('pino-inspector requires at least Node 10.12.0')
  }

  return prettifier

  function prettifier (obj) {
    if (inspector.url()) {
      if (obj.level < 30) {
        inspector.console.debug(obj)
      } else if (obj.level >= 50) {
        inspector.console.error(obj)
      } else if (obj.level >= 40) {
        inspector.console.warn(obj)
      } else {
        inspector.console.log(obj)
      }
    }

    return pretty(obj)
  }
}
