## Commits

### Commit Messages

This project conforms to the [Conventional Commits format](https://conventionalcommits.org/) for all commit messages.  Version changes are determined by adherence to this convention.

In summary, the format is:

```
<type>[optional scope]: <shortDescription>

[optional body]

[optional footer]
```

- Scope naming tries to match existing directory names, such as:
  - `packages/*` directory names
  - `docs`
- Common types for this project are: 
  - `feat` - new functionality
  - `fix` - fix for existing bug/deficiency
  - `refactor` - internal or external changes; not new
  - `chore` - project house cleaning
- The change `type` helps drive version changes.
- The words `BREAKING CHANGE <shortDescription>` should be included in the body or footer and helps drive major version changes.  Breaking changes can be the result of `feat`, `refactor`, or anything.

### Commit Scope

Favor commits that have a scope to just one of the packages.  If you're doing a multi-package change, consider breaking it up.  Do more foundational pieces first (eg, often in `core`), then downstream package commits next.

## Pull Requests

Unless you are a common contributor to the project, favor pull requests, submitted through github.  Ask for reviews through github mentions of in pluralsight.slack.com's `#design-system-dev` channel.

### Asychronous

Pull requests facilitate asynchronous communication.  Project contributors will pick up requests as possible.  Don't expect someone to drop everything for your request.  There is a place for urgency, but please don't make emergencies the norm.

### Pull Request Description

Some of the most helpful things that you can put in a pull request description:

- What is the new code meant to accomplish, or what is it trying to solve?
- Why did you take the approach you did?
- Is there anything unexpected that we'll see?
- What tradeoffs did you make, and which were the biggest deals to you?

### Iterating

Be used to multiple iterations in a pull request.  We'll ask questions back and forth.  We're all working toward the best solution.  No one is reject you or your work.  We're just trying to do what's best for the project and for Pluralsight.
