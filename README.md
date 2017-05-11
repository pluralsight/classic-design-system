# roboto
ps design system

## Reference Site

Run:

```
npm install 
npm start
```

## Packages

Test:

```
npm install
npm test
```

Tests can be run as an entire suite.  If anything changes in a component, subdependency, or site, the system should break.  Test suites are not run on isolated components.  Test dependencies and setup is done in the project root.


# Dev Guides

## Formatting

All JavaScript in the codebase is automatically formatted with [prettier](https://github.com/prettier/prettier).  Dependencies for and setup for this feature is kept in the root of the project.  It should not need reconfigured for every package.  But every package should conform to it.

## Commit Messages

This project conforms to the [Conventional Commits format](https://conventionalcommits.org/) for all commit messages.  Version changes are determined by adherence to this convention.

## Make a package dependent on another

- Make the dependency package, complete with a package.json with name and version
- Hand-code this into the source package's `dependencies`. (eg, `pluralsight/ds-util: ^1.0.0`)
- Run `npm run bootstrap` in the root project dir
- Run `npm install` in the dependency package root dir

## Package dependencies

Package dependencies should be specified in the individual package's `package.json`.  This helps ensure portability.  

### peerDependencies

Many of these packages (ie, those using react), list `react` and `react-dom` as `peerDependencies`. Lerna [will not install those](https://github.com/lerna/lerna/issues/160), so `lerna bootstrap` will fail.  These peer dependencies are an exception and are stored in the project root `package.json` `dependencies`.

### Site README build dependencies

Packages store their own README doc.  Dependencies used to build this are also an exception and stored in the `devDependencies` of the root project.
