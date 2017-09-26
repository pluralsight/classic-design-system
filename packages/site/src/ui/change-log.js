import 'isomorphic-fetch'

import core from '@pluralsight/ps-design-system-core'
import React from 'react'

import { GithubIcon, TextLink } from './index'

const ChangeLog = props => {
  const changeLogUrl = `https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}/CHANGELOG.md`
  const label = props.version ? `v${props.version}` : 'CHANGELOG'
  return (
    <div className="version">
      <TextLink href={changeLogUrl} target="_blank">
        <span className="text">
          {label}
          <div className="icon">
            <GithubIcon />
          </div>
        </span>
      </TextLink>
      <style jsx>{`
        .version {
          font-size: ${core.type.fontSizeSmall};
        }
        .text {
          display: flex;
          align-items: center;
        }
        .icon {
          display: flex;
          align-items: center;
          margin-left: ${core.layout.spacingXSmall};
        }
      `}</style>
    </div>
  )
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { packages: [] }
  }
  async fetchPackages() {
    try {
      const res = await fetch(
        'https://ps-design-system-api.herokuapp.com/api/v1/packages'
      )
      const json = await res.json()
      if (res.status === 200) {
        this.setState(_ => ({ packages: json.data }))
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  findPackageVersion() {
    const pkg = this.state.packages.filter(
      pkg =>
        pkg.name === `@pluralsight/ps-design-system-${this.props.packageName}`
    )
    return pkg.length > 0 ? pkg[0].version : null
  }
  componentWillMount() {
    if (this.props.packageName) this.fetchPackages()
  }
  render() {
    return this.state.packages.length > 0 ? (
      <ChangeLog
        version={this.findPackageVersion()}
        packageName={this.props.packageName}
      />
    ) : null
  }
}
