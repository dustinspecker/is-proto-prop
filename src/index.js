'use strict'
import lowercaseKeys from 'lowercase-keys'
import protoProps from 'proto-props'

const lowerProtoProps = lowercaseKeys(protoProps)

/**
 * Determine if a property belongs to a type's prototype
 * @param {String} type - JS type
 * @param {String} property - name of property
 * @return {Boolean} - type has property on its prototype
 */
module.exports = (type, property) => {
  let lowerType

  if (typeof type !== 'string' || typeof property !== 'string') {
    throw new TypeError('Expected a string')
  }

  lowerType = type.toLowerCase()

  return !!lowerProtoProps[lowerType] && lowerProtoProps[lowerType].indexOf(property) > -1
}
