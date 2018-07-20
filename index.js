module.exports = function (properties) {
  var schema = {properties: properties}
  schema.required = Object.keys(properties)
  schema.additionalProperties = false
  return schema
}
