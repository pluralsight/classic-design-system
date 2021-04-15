import { Illustration } from './types'

import { BookmarkIllustration } from './bookmark.dist'
import { BookmarkSmallIllustration } from './bookmark-small.dist'
import { ChannelIllustration } from './channel.dist'
import { ChannelSmallIllustration } from './channel-small.dist'
import { CloudIllustration } from './cloud.dist'
import { CloudSmallIllustration } from './cloud-small.dist'
import { CodeIllustration } from './code.dist'
import { CodeSmallIllustration } from './code-small.dist'
import { DataIllustration } from './data.dist'
import { DataSmallIllustration } from './data-small.dist'
import { DocumentIllustration } from './document.dist'
import { DocumentSmallIllustration } from './document-small.dist'
import { MagnifyIllustration } from './magnify.dist'
import { MagnifySmallIllustration } from './magnify-small.dist'
import { SignalIllustration } from './signal.dist'
import { SignalSmallIllustration } from './signal-small.dist'
import { VideoIllustration } from './video.dist'
import { VideoSmallIllustration } from './video-small.dist'
import { ZenIllustration } from './zen.dist'
import { ZenSmallIllustration } from './zen-small.dist'

const bookmark: Illustration = Object.assign(BookmarkIllustration, {
  small: BookmarkSmallIllustration
})

const channel: Illustration = Object.assign(ChannelIllustration, {
  small: ChannelSmallIllustration
})

const cloud: Illustration = Object.assign(CloudIllustration, {
  small: CloudSmallIllustration
})

const code: Illustration = Object.assign(CodeIllustration, {
  small: CodeSmallIllustration
})

const data: Illustration = Object.assign(DataIllustration, {
  small: DataSmallIllustration
})

const document: Illustration = Object.assign(DocumentIllustration, {
  small: DocumentSmallIllustration
})

const magnify: Illustration = Object.assign(MagnifyIllustration, {
  small: MagnifySmallIllustration
})

const signal: Illustration = Object.assign(SignalIllustration, {
  small: SignalSmallIllustration
})

const video: Illustration = Object.assign(VideoIllustration, {
  small: VideoSmallIllustration
})

const zen: Illustration = Object.assign(ZenIllustration, {
  small: ZenSmallIllustration
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
