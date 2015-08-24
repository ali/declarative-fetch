/**
 * Imports
 */

var DeclarativePromise = require('declarative-promise')

/**
 * Declarative fetch
 */

function DeclarativeFetch (url, params) {
  url = url || ''
  params = params || {}

  return new DeclarativePromise({
    type: 'EFFECT',
    payload: {
      type: 'FETCH',
      url: url,
      params: params
    }
  })
}

/**
 * Exports
 */

module.exports = DeclarativeFetch
