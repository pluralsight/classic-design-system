// 'Implement' innerText in JSDOM: https://github.com/jsdom/jsdom/issues/1245
Object.defineProperty(global.Element.prototype, 'innerText', {
  get() {
    this.querySelectorAll('script,style').forEach(s => s.remove())
    return this.textContent
  }
})
