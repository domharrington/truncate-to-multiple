var truncateToMultiple = require('../')
  , assert = require('assert')

describe('truncate-to-multiple', function () {

  it('should return an array truncated to multiples of X', function () {

    assert.deepEqual(truncateToMultiple([ 1, 2, 3 ], 0), [])
    assert.deepEqual(truncateToMultiple([ 1, 2, 3 ], 1), [ 1, 2, 3 ])
    assert.deepEqual(truncateToMultiple([ 1, 2, 3 ], 2), [ 1, 2 ])
    assert.deepEqual(truncateToMultiple([ 1, 2, 3 ], 3), [ 1, 2, 3 ])
    assert.deepEqual(truncateToMultiple([ 1, 2, 3 ], 4), [])

    assert.deepEqual(truncateToMultiple([ 1, 2, 3, 4, 5, 6 ], 5), [ 1, 2, 3, 4, 5 ])
    assert.deepEqual(truncateToMultiple([ 1, 2, 3, 4, 5, 6, 7, 8 ], 3), [ 1, 2, 3, 4, 5, 6 ])

  })

})
