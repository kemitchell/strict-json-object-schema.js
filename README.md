```javascript
var strict = require('strict-json-object-schema')

var firstAndLastName = strict({
  first: {type: 'string', const: 'John'},
  last: {type: 'string', const: 'Doe'}
})

var ajv = new require('ajv')()
var assert = require('assert')

assert(ajv.validateSchema(firstAndLastName))

assert(ajv.validate(firstAndLastName, {first: 'John', last: 'Doe'}))

// Missing required property "last":
assert(!ajv.validate(firstAndLastName, {first: 'John'}))

// Additional property "extra":
assert(!ajv.validate(firstAndLastName, {first: 'John', last: 'Doe', extra: 'invalid!'}))

var optionalLastName = strict({
  first: {type: 'string', const: 'John'},
  last: {
    // This property will not be required.
    optional: true,
    type: 'string',
    const: 'Doe'
  }
})

assert.deepStrictEqual(
  optionalLastName,
  {
    type: 'object',
    properties: {
      first: {type: 'string', const: 'John'},
      last: {type: 'string', const: 'Doe'}
    },
    required: ['first'], // Only first is required.
    additionalProperties: false
  }
)
```
