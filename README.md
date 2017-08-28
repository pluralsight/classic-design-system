# Pluralsight Design System

Light WIP -- 50% less fat!

## What is this Design System?

This Design System is the codified style guide for Pluralsight.  It bridges the gap from our design sense to our engineering implementation. The Pluralsight Style Guide is a design artifact that is the distillation of the common design principles and elements that we use across the product at Pluralsight.  If something is in the Style Guide, it can be in the Design System.

## What is it not?

The Design System does not include or share anything that is not in the Style Guide.  It has to be *that* common and general to the product design to be here.  Just because more than one team is sharing a component or something similar doesn't mean it should be here.  The Style Guide favors legitimately general (as in, everyone can or should use it) things.  This means that the design elements included in the Style Guide are usually of a foundational and basic nature.

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
