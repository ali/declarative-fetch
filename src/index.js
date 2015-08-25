/**
 * Imports
 */

import createEffect from 'declarative-effect'

/**
 * Declarative fetch
 */

function DeclarativeFetch (url='', params={}) {
  return createEffect({
    type: 'FETCH',
    url,
    params
  })
}

/**
 * Exports
 */

export default DeclarativeFetch
