/* eslint-disable no-prototype-builtins */
const __createBinding = function (o, m, k, k2) {
  if (k2 === undefined) k2 = k
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k]
    }
  })
}

const __exportStar = function (m, exports) {
  for (const p in m)
    if (p !== 'default' && !exports.hasOwnProperty(p))
      __createBinding(exports, m, p)
}

__exportStar(require('./dist/cjs/react/index.js'), exports)
__exportStar(require('./dist/cjs/vars/index.js'), exports)
