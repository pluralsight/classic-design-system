# Pluralsight design system treeshaking research

## Useful tool for analysis
- Config setup: [createapp.dev](https://createapp.dev/)
- Bundle analysis: [bundle-phobia-cli](https://github.com/AdrieanKhisbe/bundle-phobia-cli)

## Bundlers tested:
- esbuild@^0.11.15
- parcel@^1.12.5
- rollup@^2.45.2
- snowpack@^3.3.5
- webpack@^5.36.0
- webpack@^4.46.0


## @pluralsight/ps-design-system-icon with ESM updates
- esbuild: tree shakes as expected
- parcel: tree shakes as expected
- rollup: tree shakes as expected
- snowpack: tree shakes as expected
- webpack-5: tree shakes as expected
- webpack-4: tree shakes as expected
  - Caveat: Using `webpack-cli": "^4.6.0` could not figure out how to install `3.3.12` along the current version

## @pluralsight/ps-design-system-icon without ESM updates
- esbuild: tree shakes as expected
- parcel: tree shakes as expected
- rollup: tree shakes as expected
- snowpack: tree shakes as expected
- webpack-5: tree shakes as expected
- webpack-4: tree shakes as expected
   - Caveat: Using `webpack-cli": "^4.6.0` could not figure out how to install `3.3.12` along the current version

##  Of note
- Rollup is the only build tool that is throwing a warning on our sourcemaps pointing to files not included in published package.