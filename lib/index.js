/**
 * Imports
 */

var DeclarativePromise = require('declarative-promise')

/**
 * Declarative fetch
 */

function fetch (url, opts) {
  opts = opts || {}

  return new DeclarativePromise({
    type: 'FETCH',
    payload: {
      url: url,
      method: opts.method || 'get',
      headers: opts.headers,
      body: opts.body
    }
  })
}

/**
 * Exports
 */

module.exports = fetch