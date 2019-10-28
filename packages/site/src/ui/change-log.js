import 'isomorphic-fetch'

import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import React from 'react'

import { GithubIcon, TextLink } from './index.js'

const ChangeLog = props => {
  const changeLogUrl = `https://github.com/pluralsight/design-system/blob/master/packages/${props.packageName}/CHANGELOG.md`
  const label = props.version ? `v${props.version}` : 'CHANGELOG'
  return (
    <div className="version">
      <TextLink href={changeLogUrl} target="_blank">
        <span className="text">
          {label}
          <div className="icon">
            <GithubIcon color={Icon.colors.orange} />
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
ChangeLog.propTypes = {
  packageName: PropTypes.string,
  version: PropTypes.string
}

const getPackagesApiHost = _ => {
  const host = process.env.PACKAGES_API_HOST
  if (!host) throw new Error('process.env.PACKAGES_API_HOST required')
  return host
}

export default class ChangeLogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { packages: null }
  }
  async fetchPackages() {
    console.log('fetching packages...')
    try {
      const res = await fetch(getPackagesApiHost() + '/api/v2/packages') // eslint-disable-line no-undef
      const json = await res.json()
      if (res.ok) {
        console.log('res.ok', res, json)
        this.setState(_ => ({ packages: json.data }))
      } else {
        console.log('res.!ok', res)
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  componentDidMount() {
    if (this.props.packageName) this.fetchPackages()
  }
  render() {
    return this.state.packages ? (
      <ChangeLog
        version={
          this.state.packages[
            `@pluralsight/ps-design-system-${this.props.packageName}`
          ]
        }
        packageName={this.props.packageName}
      />
    ) : (
      <ChangeLog packageName={this.props.packageName} />
    )
  }
}
ChangeLogContainer.propTypes = {
  packageName: PropTypes.string
}
