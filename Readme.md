# declarative-fetch

Pure fetch function.  Mimics the fetch API, but produces a javascript object describing the fetch to be performed, that can be executed by libraries like [redux-fetch](https://github.com/ashaffer/redux-fetch).

## Usage

The API is identical to HTML5 fetch, except that it returns a [declarative-promise](https://github.com/ashaffer/declarative-promise), rather than a real promise.