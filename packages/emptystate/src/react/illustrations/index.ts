import { Illustration } from './types'

import BookmarkIllustration from './bookmark.dist'
import BookmarkIllustrationSmall from './bookmark-small.dist'
import ChannelIllustration from './channel.dist'
import ChannelIllustrationSmall from './channel-small.dist'
import CloudIllustration from './cloud.dist'
import CloudIllustrationSmall from './cloud-small.dist'
import CodeIllustration from './code.dist'
import CodeIllustrationSmall from './code-small.dist'
import DataIllustration from './data.dist'
import DataIllustrationSmall from './data-small.dist'
import DocumentIllustration from './document.dist'
import DocumentIllustrationSmall from './document-small.dist'
import MagnifyIllustration from './magnify.dist'
import MagnifyIllustrationSmall from './magnify-small.dist'
import SignalIllustration from './signal.dist'
import SignalIllustrationSmall from './signal-small.dist'
import VideoIllustration from './video.dist'
import VideoIllustrationSmall from './video-small.dist'
import ZenIllustration from './zen.dist'
import ZenIllustrationSmall from './zen-small.dist'

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
