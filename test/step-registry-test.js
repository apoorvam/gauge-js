var assert = require('chai').assert;
var StepRegistry = require('../lib/step-registry');

describe('Store and retrieve steps', function() {

  it('Should store and retrive steps', function(done) {
    var sampleFunction = function() {};
    var stepRegistry = new StepRegistry();

    stepRegistry.add('Sample Step', sampleFunction);
    assert.equal(sampleFunction, stepRegistry.get('Sample Step'));
    done();
  });

  it('Should return true for implemented step', function(done) {
    var stepRegistry = new StepRegistry();
    stepRegistry.add('Say {} to {}', function(){});
    assert.equal(true, stepRegistry.exists('Say {} to {}'));
    done();
  });

  it('Should return false for unimplemented step', function(done) {
    var stepRegistry = new StepRegistry();

    assert.equal(false, stepRegistry.exists('Say {} to {}'));
    done();
  });

});
