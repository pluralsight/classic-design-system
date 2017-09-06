# Pluralsight Design System

<a href="https://www.youtube.com/watch?v=aDh6eIodH-c"><img alt="The UI building blocks for creating a cohesive design across Pluralsight products." src="https://i.imgur.com/tf35gHt.jpg" /></a>

Light WIP -- 50% less fat!

## Reference Site

To run locally:

```
nvm use
npm install 
npm run bootstrap
npm start
```

Or visit the [live site](http://design-system.pluralsight.com).

## Packages

Test:

```
nvm use
npm install
npm run bootstrap
npm test
```

Tests can be run as an entire suite.  If anything changes in a component, subdependency, or site, the system should break.  Test suites are not run on isolated components.  Test dependencies and setup is done in the project root.

# Dev Guides

See [CONTRIBUTING](CONTRIBUTING.md) guide for information on how to submit code to the project.

## Formatting

All JavaScript in the codebase is automatically formatted with [prettier](https://github.com/prettier/prettier).  Dependencies for and setup for this feature is kept in the root of the project.  It should not need reconfigured for every package.  But every package should conform to it.

## Make a package dependent on another

- Make the dependency package, complete with a package.json with name and version
- Hand-code this into the source package's `dependencies`. (eg, `pluralsight/ps-design-system-button: ^1.0.0`)
- Run `npm run bootstrap` in the root project dir
- Run `npm install` in the dependency package root dir

## Package dependencies

Package dependencies should be specified in the individual package's `package.json`.  This helps ensure portability.  

### peerDependencies

Many of these packages (ie, those using react), list `react` and `react-dom` as `peerDependencies`. Lerna [will not install those](https://github.com/lerna/lerna/issues/160), so `lerna bootstrap` will fail.  These peer dependencies are an exception and are stored in the project root `package.json` `dependencies`.

### Site doc build dependencies

Dependencies used to build this are also an exception and stored in the `devDependencies` of the root project.
