import core from '@pluralsight/ps-design-system-core'

import Heading from './heading'
import { addHeading } from './content'

const formatId = href =>
  href
    .toLowerCase()
    .split(' ')
    .join('-')
const formatHref = href => '#' + formatId(href)

export default class extends React.Component {
  componentDidMount() {
    const href = formatHref(this.props.children)
    addHeading(this.props.children, href)
    if (
      typeof window != 'undefined' &&
      window.location.hash === href &&
      this.el
    ) {
      this.el.focus()
      setTimeout(_ => this.el.scrollIntoView(), 1)
    }
  }
  render() {
    return (
      <div>
        <Heading size="large">
          <h2>
            <a
              id={formatId(this.props.children)}
              className="link"
              href={formatHref(this.props.children)}
              ref={el => (this.el = el)}
            >
              {this.props.children}
            </a>
          </h2>
        </Heading>
        <style jsx>{`
          .link {
            color: currentColor;
            text-decoration: none;
          }
          .link:focus {
            background: ${core.colors.gradientHorz};
            color: ${core.colors.white};
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}
