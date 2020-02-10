import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import * as core from '@pluralsight/ps-design-system-core'
import { colors as iconColors } from '@pluralsight/ps-design-system-icon'

import { GithubIcon, TextLink } from './index.js'

export default function ChangeLog(props) {
  const { packageName } = props
  const [packages, setPackages] = useState([])

  useEffect(() => {
    let cancelled = false

    async function fetchPackages() {
      try {
        const host = getPackagesApiHost()
        const endpoint = `${host}/api/v2/packages`

        const res = await fetch(endpoint)
        const json = await res.json()

        if (!res.ok) throw new Error('changelog request failed')
        if (cancelled) return

        setPackages(json.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchPackages()

    return () => {
      cancelled = true
    }
  }, [packageName])

  return (
    <ChangeLogLabel
      version={packages[`@pluralsight/ps-design-system-${packageName}`]}
      packageName={packageName}
    />
  )
}

ChangeLog.propTypes = {
  packageName: PropTypes.string.isRequired
}

function ChangeLogLabel(props) {
  const { packageName, version } = props

  const label = version ? `v${version}` : 'CHANGELOG'
  const changeLogUrl = `https://github.com/pluralsight/design-system/blob/master/packages/${packageName}/CHANGELOG.md`

  return (
    <>
      <div className="version">
        <TextLink href={changeLogUrl} target="_blank">
          <span className="text">
            {label}

            <div className="icon">
              <GithubIcon color={iconColors.orange} />
            </div>
          </span>
        </TextLink>
      </div>

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
    </>
  )
}

ChangeLogLabel.propTypes = {
  packageName: PropTypes.string.isRequired,
  version: PropTypes.string
}

const getPackagesApiHost = () => {
  const host = process.env.PACKAGES_API_HOST
  if (!host) throw new Error('process.env.PACKAGES_API_HOST required')
  return host
}
