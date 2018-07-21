module.exports = function (properties) {
  var schema = {type: 'object', properties: properties}
  var required = []
  Object.keys(properties).forEach(function (key) {
    var subschema = properties[key]
    if (subschema.optional) delete subschema.optional
    else required.push(key)
  })
  schema.required = required
  schema.additionalProperties = false
  return schema
}
