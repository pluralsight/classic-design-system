// @flow
import config from './config'

import { Packages, Usages } from './types'

export const formatUsage = (usages: Usages, packages: Packages): string =>
  Object.keys(usages).reduce(
    (summ, repoName) => {
      summ += `*${repoName}*\n`
      summ += Object.keys(usages[repoName]).reduce((deps, depName) => {
        deps += `${depName}@${usages[repoName][depName]} -> ${packages[
          depName
        ] || '?unavailable?'}\n`
        return deps
      }, '')
      summ += '\n'
      return summ
    },
    `*VERSION UPGRADE OPPORTUNITIES*\n
\n`
  )

export const post = async (text: string): Promise<any> => {
  try {
    const res = await fetch(config.slackWebhookUrl, {
      method: 'POST',
      body: JSON.stringify({ text, channel: config.slackChannelName })
    })

    if (res.ok) {
      console.log('posted usage to slack.')
    } else {
      const body = await res.json()
      console.log('failure to post to slack', res.status, body)
    }
  } catch (err) {
    console.log('failure to post to slack', err)
  }
}
