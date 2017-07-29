'use strict'
function Deffered() {
  if (!(this instanceof Deffered)) {
    return new Deffered()
  }

  /**
   * actions:
   *  resolve
   *  reject
   */
  this.resolve = null
  this.reject = null

  this.promise = new Promise(function(resolve, reject) {
    this.resolve = resolve
    this.reject = reject
  }.bind(this))
}

module.exports = Deffered