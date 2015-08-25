/**
 * Imports
 */

import DeclarativePromise from 'declarative-promise'

/**
 * Declarative fetch
 */

function DeclarativeFetch (url='', params={}) {
  return new DeclarativePromise({
    type: 'EFFECT',
    payload: {type: 'FETCH', url, params}
  })
}

/**
 * Exports
 */

export default DeclarativeFetch
