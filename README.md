```javascript
var strict = require('strict-json-object-schema')

var schema = strict({
  first: {type: 'string', const: 'John'},
  last: {type: 'string', const: 'Doe'}
})

var ajv = new require('ajv')()
var assert = require('assert')

assert(ajv.validateSchema(schema))

assert(ajv.validate(schema, {first: 'John', last: 'Doe'}))

// Missing required property "last":
assert(!ajv.validate(schema, {first: 'John'}))

// Additional property "extra":
assert(!ajv.validate(schema, {first: 'John', last: 'Doe', extra: 'invalid!'}))
```
