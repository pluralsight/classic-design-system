// NOTE: see https://stackoverflow.com/a/3485654
export const forceRepaint = (el: HTMLElement) => {
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight
}

export const setHeightToAuto = (el: HTMLElement) => {
  const prevHeight = el.style.height
  el.style.height = 'auto'

  const autoHeight = window.getComputedStyle(el).height
  el.style.height = prevHeight

  forceRepaint(el)
  el.style.height = autoHeight
}

export const setTransitionEnabled = (
  el: HTMLElement,
  opts?: { enabled?: boolean }
) => {
  el.style.transition = opts?.enabled ? '' : 'none'
}

export const updateOverflowStyle = (
  el: HTMLElement,
  opts: { isOpen: boolean; isTransitioning: boolean }
) => {
  if (!el) return

  const { isOpen, isTransitioning = false } = opts

  el.style.overflow = isTransitioning || !isOpen ? 'hidden' : 'visible'
  el.style.visibility = isTransitioning || isOpen ? 'visible' : 'hidden'
}

export const waitForHeightTransitionToEnd = async (el: HTMLElement) => {
  const isAlreadyAtTargetHeight =
    el.style.height === `${el.getBoundingClientRect().height}px`

  if (isAlreadyAtTargetHeight) return

  const transitionEndEventPromise = new Promise(resolve => {
    el.addEventListener(
      'transitionend',
      function transitionEnd(event) {
        if (event.propertyName === 'height') {
          el.removeEventListener('transitionend', transitionEnd, false)
          resolve(undefined)
        }
      },
      false
    )
  })

  const transitionDuration = window.getComputedStyle(el).transitionDuration
  const transitionDurationSeconds = parseFloat(transitionDuration)
  const transitionDurationPassedPromise = new Promise(resolve => {
    setTimeout(resolve, transitionDurationSeconds * 1000)
  })

  return Promise.race([
    transitionEndEventPromise,
    transitionDurationPassedPromise
  ])
}
