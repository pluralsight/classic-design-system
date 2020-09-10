import { IllustrationNames } from '../../vars'
import { Illustration } from './types'

import bookmark from './bookmark.dist'
import bookmarkSmall from './bookmark-small.dist'
import channel from './channel.dist'
import channelSmall from './channel-small.dist'
import cloud from './cloud.dist'
import cloudSmall from './cloud-small.dist'
import code from './code.dist'
import codeSmall from './code-small.dist'
import data from './data.dist'
import dataSmall from './data-small.dist'
import document from './document.dist'
import documentSmall from './document-small.dist'
import magnify from './magnify.dist'
import magnifySmall from './magnify-small.dist'
import signal from './signal.dist'
import signalSmall from './signal-small.dist'
import video from './video.dist'
import videoSmall from './video-small.dist'
import zen from './zen.dist'
import zenSmall from './zen-small.dist'

const illustrations: { [K in IllustrationNames]: Illustration } = {
  bookmark: Object.assign(bookmark, { small: bookmarkSmall }),
  channel: Object.assign(channel, { small: channelSmall }),
  cloud: Object.assign(cloud, { small: cloudSmall }),
  code: Object.assign(code, { small: codeSmall }),
  data: Object.assign(data, { small: dataSmall }),
  document: Object.assign(document, { small: documentSmall }),
  magnify: Object.assign(magnify, { small: magnifySmall }),
  signal: Object.assign(signal, { small: signalSmall }),
  video: Object.assign(video, { small: videoSmall }),
  zen: Object.assign(signal, { small: zenSmall })
}

export default illustrations
