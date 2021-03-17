/*! Copyright 2019 Ayogo Health Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
/* Fork from https://github.com/AyogoHealth/jest-ts-webcompat-resolver/blob/master/index.js */

let defaultResolver

function requireDefaultResolver() {
  if (!defaultResolver) {
    try {
      defaultResolver = require(`jest-resolve/build/defaultResolver`).default
    } catch (error) {
      defaultResolver = require(`jest-resolve/build/default_resolver`).default
    }
  }

  return defaultResolver
}

module.exports = (request, options) => {
  const { basedir, defaultResolver, extensions } = options

  if (!defaultResolver) {
    defaultResolver = requireDefaultResolver()
  }

  try {
    return defaultResolver(request, options)
  } catch (e) {
    // no ext (most normal) didn't work
  }

  try {
    return defaultResolver(request.replace(/\.js$/, '.tsx'), options)
  } catch (e) {
    // .tsx (more specific than .ts) didn't work
  }

  try {
    return defaultResolver(request.replace(/\.js$/, '.ts'), options)
  } catch (e) {
    // .ts didn't work (no more options)
  }
}
