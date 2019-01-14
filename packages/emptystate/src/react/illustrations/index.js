import bookmark from './bookmark.dist.js'
import channel from './channel.dist.js'
import cloud from './cloud.dist.js'
import code from './code.dist.js'
import data from './data.dist.js'
import document from './document.dist.js'
import magnify from './magnify.dist.js'
import signal from './signal.dist.js'
import video from './video.dist.js'
import zen from './zen.dist.js'

bookmark.small = require('./bookmark-small.dist.js').default
channel.small = require('./channel-small.dist.js').default
cloud.small = require('./cloud-small.dist.js').default
code.small = require('./code-small.dist.js').default
data.small = require('./data-small.dist.js').default
document.small = require('./document-small.dist.js').default
magnify.small = require('./magnify-small.dist.js').default
signal.small = require('./signal-small.dist.js').default
video.small = require('./video-small.dist.js').default
zen.small = require('./zen-small.dist.js').default

export {
  bookmark,
  channel,
  cloud,
  code,
  data,
  document,
  magnify,
  signal,
  video,
  zen
}
