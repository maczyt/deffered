'use strict'
var expect = require('chai').expect
var Defferd = require('../')

describe('constructor', function() {
  it('constructors a new Deffered', function() {
    expect(new Defferd() instanceof Defferd).to.be.ok
  })
  it('return a new Deffered', function() {
    expect(Defferd() instanceof Defferd).to.be.ok
  })
  it('return new instance each time', function() {
    expect(Defferd()).to.be.not.equal(Defferd())
  })
})

describe('has a promise', function() {
  it('promise property is a Promise', function() {
    var deffered = Defferd()
    expect(deffered.promise instanceof Promise).to.be.ok
  })
})

describe('resolve', function() {
  var deffered = Defferd()
  it('value is resolved properly', function() {
    deffered.promise.then(function(value) {
      expect(value).to.be.equal(23)
    })
    deffered.resolve(23)
  })
})

describe('reject', function() {
  var deffered = Defferd()
  it('error is rejected properly', function() {
    deffered.promise.then(null, function(error) {
      expect(error).to.be.equal('error')
    })
    deffered.reject('error')
  })
})