var expect = require('chai').expect;
import tagCloudResult from '../src/common/Tag';


describe('tagTest', function() {
  it('tag should exist', function() {
    expect(tagCloudResult).to.exist;
  });
});
