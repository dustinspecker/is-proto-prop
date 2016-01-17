'use strict'
import isProtoProp from '../lib/'
import test from 'ava'

test('should throw error when type or property is not a string', t => {
  const typeTest = () => isProtoProp(1, 'prop')

  const propTest = () => isProtoProp('type', 1)

  t.throws(typeTest, TypeError)
  t.throws(propTest, TypeError)
  // expect(typeTest).to.throw(TypeError, /Expected a string/)
  // expect(propTest).to.throw(TypeError, /Expected a string/)
})

test('should return false if not a js type', t => {
  t.notOk(isProtoProp('dog', 'bark'))
  t.notOk(isProtoProp('gulp', 'task'))
})

test('should return false if property is not on prototype', t => {
  t.notOk(isProtoProp('Array', 'count'))
  t.notOk(isProtoProp('Error', 'ignore'))
})

test('shoud return true if property is on prototype', t => {
  t.ok(isProtoProp('Array', 'length'))
  t.ok(isProtoProp('Object', 'toString'))
})

test('should be case insensitive for types', t => {
  t.ok(isProtoProp('array', 'length'))
  t.ok(isProtoProp('ARRAY', 'length'))
})
