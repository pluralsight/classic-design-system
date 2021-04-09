module.exports = {
  future: {
    webpack5: true
  },
  webpack: config => {
    config.optimization.minimize = false
    return config
  }
}
