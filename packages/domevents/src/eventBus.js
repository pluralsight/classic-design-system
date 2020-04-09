import { domEvents } from './events.js'

const subscribers = {
  [domEvents.click]: new Set(),
  [domEvents.contextmenu]: new Set(),
  [domEvents.resize]: new Set(),
  [domEvents.scroll]: new Set()
}

export const subscribe = (event, callback) => {
  subscribers[event].add(callback)
}

export const unsubscribe = (event, callback) => () =>
  subscribers[event].delete(callback)

const send = event => e =>
  Boolean(subscribers[event].size) && subscribers[event].forEach(l => l(e))

// Click
document.addEventListener(domEvents.click, send(domEvents.click), {
  passive: true
})

// Contextmenu
document.addEventListener(domEvents.contextmenu, send(domEvents.contextmenu), {
  passive: true
})

// Resize
let currentAnimationFrame = null

const requestAnimationFrame = () => {
  window.cancelAnimationFrame(currentAnimationFrame)
  currentAnimationFrame = window.requestAnimationFrame(send(domEvents.resize))
  return currentAnimationFrame
}

window.addEventListener(domEvents.resize, requestAnimationFrame, {
  passive: true
})

// Scroll
let timeout = null
const clear = () => {
  clearTimeout(timeout)
  timeout = setTimeout(send(domEvents.scroll), 50)
}
window.addEventListener(domEvents.scroll, clear, { passive: true })
