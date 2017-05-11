# roboto
ps design system

## Commit Messages

This project conforms to the [Conventional Commits format](https://conventionalcommits.org/) for all commit messages.  Version changes are determined by adherence to this convention.

## Make a package dependent on another

- Make the dependency package, complete with a package.json with name and version
- Hand-code this into the source package's `dependencies`. (eg, `pluralsight/ds-util: ^1.0.0`)
- Run `npm run bootstrap` in the root project dir
- Run `npm install` in the dependency package root dir
