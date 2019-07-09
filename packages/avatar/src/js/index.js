/* eslint-disable camelcase */

import { colorByLetter, fallbackPixel } from '../vars/index.js'

export const getInitials = fullname => {
  if (!fullname || !fullname.length) return

  const names = fullname.trim().split(' ')

  const first = names[0][0]
  const second = names.length === 1 ? names[0][1] : names[names.length - 1][0]

  return `${first}${second}`.toUpperCase()
}

export const getColorByName = name => {
  const defaultColorMapKey = 'A'
  const stableRandLetter =
    sha1(name)
      .toUpperCase()
      .replace(/[^A-Z]/g, '')[0] || defaultColorMapKey
  return colorByLetter[stableRandLetter]
}

export const transformSrc = src => {
  if (!src.match(/gravatar/)) return src

  const sep = src.match(/\?/) ? '&' : '?'
  const fallback = encodeURIComponent(fallbackPixel)

  return `${src}${sep}d=${fallback}`
}

// from https://raw.githubusercontent.com/jbt/js-crypto/master/sha1.js
const sha1 = function(str1) {
  for (
    var blockstart = 0,
      i = 0,
      W = [],
      A,
      B,
      C,
      D,
      F,
      G,
      H = [(A = 0x67452301), (B = 0xefcdab89), ~A, ~B, 0xc3d2e1f0],
      word_array = [],
      temp2,
      s = unescape(encodeURI(str1)),
      str_len = s.length;
    i <= str_len;

  ) {
    word_array[i >> 2] |= (s.charCodeAt(i) || 128) << (8 * (3 - (i++ % 4)))
  }
  word_array[(temp2 = ((str_len + 8) >> 2) | 15)] = str_len << 3

  for (; blockstart <= temp2; blockstart += 16) {
    A = H
    i = 0

    for (
      ;
      i < 80;
      A = [
        [
          (G =
            (((s = A[0]) << 5) | (s >>> 27)) +
            A[4] +
            (W[i] =
              i < 16 ? ~~word_array[blockstart + i] : (G << 1) | (G >>> 31)) +
            1518500249) +
            (((B = A[1]) & (C = A[2])) | (~B & (D = A[3]))),
          (F = G + (B ^ C ^ D) + 341275144),
          G + ((B & C) | (B & D) | (C & D)) + 882459459,
          F + 1535694389
        ][0 | (i++ / 20)] | 0,
        s,
        (B << 30) | (B >>> 2),
        C,
        D
      ]
    ) {
      G = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]
    }

    for (i = 5; i; ) H[--i] = (H[i] + A[i]) | 0
  }

  for (str1 = ''; i < 40; )
    str1 += ((H[i >> 3] >> ((7 - (i++ % 8)) * 4)) & 15).toString(16)
  return str1
}
