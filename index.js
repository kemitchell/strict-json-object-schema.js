module.exports = function (properties) {
  var schema = {type: 'object', properties: properties}
  schema.required = Object.keys(properties)
  schema.additionalProperties = false
  return schema
}
