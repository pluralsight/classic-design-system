import { Illustration } from './types.js'

import BookmarkIllustration from './bookmark.dist.js'
import BookmarkIllustrationSmall from './bookmark-small.dist.js'
import ChannelIllustration from './channel.dist.js'
import ChannelIllustrationSmall from './channel-small.dist.js'
import CloudIllustration from './cloud.dist.js'
import CloudIllustrationSmall from './cloud-small.dist.js'
import CodeIllustration from './code.dist.js'
import CodeIllustrationSmall from './code-small.dist.js'
import DataIllustration from './data.dist.js'
import DataIllustrationSmall from './data-small.dist.js'
import DocumentIllustration from './document.dist.js'
import DocumentIllustrationSmall from './document-small.dist.js'
import MagnifyIllustration from './magnify.dist.js'
import MagnifyIllustrationSmall from './magnify-small.dist.js'
import SignalIllustration from './signal.dist.js'
import SignalIllustrationSmall from './signal-small.dist.js'
import VideoIllustration from './video.dist.js'
import VideoIllustrationSmall from './video-small.dist.js'
import ZenIllustration from './zen.dist.js'
import ZenIllustrationSmall from './zen-small.dist.js'

const bookmark: Illustration = Object.assign(BookmarkIllustration, {
  small: BookmarkIllustrationSmall
})

const channel: Illustration = Object.assign(ChannelIllustration, {
  small: ChannelIllustrationSmall
})

const cloud: Illustration = Object.assign(CloudIllustration, {
  small: CloudIllustrationSmall
})

const code: Illustration = Object.assign(CodeIllustration, {
  small: CodeIllustrationSmall
})

const data: Illustration = Object.assign(DataIllustration, {
  small: DataIllustrationSmall
})

const document: Illustration = Object.assign(DocumentIllustration, {
  small: DocumentIllustrationSmall
})

const magnify: Illustration = Object.assign(MagnifyIllustration, {
  small: MagnifyIllustrationSmall
})

const signal: Illustration = Object.assign(SignalIllustration, {
  small: SignalIllustrationSmall
})

const video: Illustration = Object.assign(VideoIllustration, {
  small: VideoIllustrationSmall
})

const zen: Illustration = Object.assign(ZenIllustration, {
  small: ZenIllustrationSmall
})

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
