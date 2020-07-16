import { createTemplate } from './createTemplate.js'
import { shadowReset } from './shadowReset.js'
import { createComponent } from './createComponent.js'
/**
 * @param {String} tag
 * @param {String} template
 * @param {CustomElementConstructor} base
 * @param {Object} options
 * @param {string} [options.mode=open]
 * @param {Boolean} [options.delegatesFocus=undefined]
 * @param {Boolean} [options.shadow=true]
 * @example
 * const MyElement = element(
 *  'component',
 *  html`${my template}`,
 * )
 */

export const element = (
  tag,
  template,
  { mode = 'open', delegatesFocus } = {}
) => {
  /**
   *
   * @param {Object<string, string|number|boolean>} attrs
   * @param  {...string} children
   */
  // eslint-disable-next-line react/prop-types
  const prefixedTag = `psds-${tag}`

  const component = createComponent(prefixedTag)

  if (customElements.get(prefixedTag)) return component
  class Element extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode, delegatesFocus })
      const fragment = createTemplate(`<style>${shadowReset}</style>`, template)
      this.shadowRoot.appendChild(fragment.content.cloneNode(true))
    }
  }
  customElements.define(prefixedTag, Element)
  return component
}
