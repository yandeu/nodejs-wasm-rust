import assert from 'assert'
import { add } from '../pkg/nodejs_wasm_rust.js'

describe('Wasm', () => {
  describe('#add()', () => {
    it('should add 1 + 1 ', () => {
      assert.equal(add(1, 1), 2)
    })
    it('should add 18.5 + 85.94 ', () => {
      assert.equal(add(18.5, 85.94), 104.44)
    })
  })
})
