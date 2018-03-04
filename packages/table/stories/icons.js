import React from 'react'
import Table from '../react'
import Icon from '@pluralsight/ps-design-system-icon/react'

const iconCss = { '> svg': { display: 'flex' } }
const spacedICon = Object.assign({ marginLeft: '15px' }, iconCss)

const props = {
  headers: [
    { key: 'paths', label: 'PATHS' },
    { key: 'mentoring', label: 'MENTORING' },
    { key: 'channel', label: 'CHANNEL' },
    { key: 'courses', label: 'COURSES' },
  ],
  rows: [
    {
      paths: <Icon id={Icon.ids.path} size={Icon.sizes.medium} css={iconCss} />,
      mentoring: (
        <Icon id={Icon.ids.hand} size={Icon.sizes.medium} css={spacedICon} />
      ),
      channel: (
        <Icon id={Icon.ids.channel} size={Icon.sizes.medium} css={spacedICon} />
      ),
      courses: (
        <Icon
          id={Icon.ids.playCircle}
          size={Icon.sizes.medium}
          css={spacedICon}
        />
      )
    },
    {
      paths: (
        <Icon id={Icon.ids.account} size={Icon.sizes.medium} css={iconCss} />
      ),
      mentoring: (
        <Icon
          id={Icon.ids.bookmark}
          size={Icon.sizes.medium}
          css={spacedICon}
        />
      ),
      channel: (
        <Icon
          id={Icon.ids.briefcase}
          size={Icon.sizes.medium}
          css={spacedICon}
        />
      ),
      courses: (
        <Icon id={Icon.ids.search} size={Icon.sizes.medium} css={spacedICon} />
      )
    },
    {
      paths: <Icon id={Icon.ids.chat} size={Icon.sizes.medium} css={iconCss} />,
      mentoring: (
        <Icon
          id={Icon.ids.download}
          size={Icon.sizes.medium}
          css={spacedICon}
        />
      ),
      channel: (
        <Icon
          id={Icon.ids.envelope}
          size={Icon.sizes.medium}
          css={spacedICon}
        />
      ),
      courses: (
        <Icon id={Icon.ids.user} size={Icon.sizes.medium} css={spacedICon} />
      )
    }
  ]
}

const RegularTable = () => (
  <Table headers={props.headers}>
    {props.rows.map((item, index) => <Table.Row data={item} key={index} />)}
  </Table>
)

export default RegularTable
