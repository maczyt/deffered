# deffered

simple implement Deffered

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