function PropTypeError(message) {
  this.message = message
  this.stack = ''
}
PropTypeError.prototype = Error.prototype

export default PropTypeError
