# declarative-fetch

Pure fetch function.  Mimics the fetch API, but produces a javascript object describing the fetch to be performed, that can be executed by libraries like [redux-fetch](https://github.com/reudx-effects/redux-fetch).

## Installation

`npm install declarative-fetch`

## Usage

The API is identical to HTML5 fetch, except that it returns a [declarative-promise](https://github.com/redux-effects/declarative-promise), rather than a real promise.

## Example

```javascript
import fetch from 'declarative-fetch'
import {createAction} from 'redux-actions'

const userCreated = createAction('USER_CREATED')

function createUser (user) {
  return fetch('/user', {
    method: 'POST',
    body: user
  }).then(userCreated)
}
```