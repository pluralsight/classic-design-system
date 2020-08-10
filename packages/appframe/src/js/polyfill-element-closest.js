/*
NOTE: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
*/

export default function polyfillElementClosest() {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this

      do {
        if (Element.prototype.matches.call(el, s)) return el
        el = el.parentElement || el.parentNode
      } while (el !== null && el.nodeType === 1)
      return null
    }
  }
}
