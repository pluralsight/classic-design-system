function md5(input?: string): string
function sha1(input?: string): string
function sha256(input?: string): string

declare module 'tiny-hashes' {
  export { md5, sha1, sha256 }
}

declare module 'tiny-hashes/md5' {
  export default md5
}

declare module 'tiny-hashes/sha1' {
  export default sha1
}

declare module 'tiny-hashes/sha256' {
  export default sha256
}
