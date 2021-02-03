var assert = require('assert');

var index = require('../index')

describe('Array', function() {
  describe('#returnThousand()', function() {
    it('should return 1000', function() {

      assert.equal(1000, index.returnThousand());
    });
  });
});