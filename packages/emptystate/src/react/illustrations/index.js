import channel from './channel.dist.js'
import disconnected from './disconnected.dist.js'
import interactive from './interactive.dist.js'
import search from './search.dist.js'
import video from './video.dist.js'

search.small = require('./search-small.dist.js').default

export { channel, disconnected, interactive, search, video }
