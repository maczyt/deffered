# deffered

simple implement Deffered

[![npm](https://img.shields.io/npm/dm/deffered.svg)](https://github.com/maczyt/deffered)
[![GitHub issues](https://img.shields.io/github/issues/maczyt/deffered.svg)](https://github.com/maczyt/deffered/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/maczyt/deffered/master/LICENSE)

## Example

``` js

var Deffered = require('deffered')

var deffered = new Deffered()

// async event
deffered.promise.then(function(value) {
  // resolve
}).catch(function(error) {
  // reject
})

// resolve
deffered.resolve(value)

// reject
deffered.reject(Error)

```