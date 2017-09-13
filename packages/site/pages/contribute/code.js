import core from '@pluralsight/ps-design-system-core'

import {
  Chrome,
  Content,
  Doc,
  Heading,
  P,
  SectionHeading,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ =>
  <Chrome>
    <Content title="Install">
      <Heading size="xxLarge">
        <h1>Contribute Code</h1>
      </Heading>
      <Doc>{`
## Goal of contributing
We want the experience of contributing to be awesome for everyone involved.  When the number of contributors and the number of commits from outside the Design System team proper trends upward over time, we’re excited.  We want the quality of design and implementation in the Design System to improve over time.  From all this, we hope to continue to provide great design and user experience for more teams.

## Deciding what to work on
Bring your best ideas and your greatest needs.  Check out the Design System roadmap (coming soon) for things that we’ve considered and where they’re currently falling in our priority. Things that have been identified as high priority because of their value add or timeliness are probably most helpful to contribute to.  If you have insight that could influence this priority, please share it.  Chat with the Design System team in [#design-system-dev](slack://channel?team=pluralsight&id=design-system-dev) before you start working in order to avoid churn, rework, or a non-matching design vision.

## Collaboration required
One of the [main goals](/) of the Design System is visual consistency and a shared design language in the Pluralsight product and development process.  Therefore we make special effort to ensure the Design System works well as a whole and that additions and changes compliment the existing vision of the project.

Don’t feel bad if all good ideas don’t get included in the Design System or if we ask for changes during reviews.  We’re glad you’re here to help.  That's why we're here too!  Our shared goal is the betterment of the Design System and Pluralsight product as a whole.

## One-time code drop
It’s totally ok to make a contribution where you can help and then be done with it the next day.  You don’t have to share in the maintenance.  You don't have to stick aruond forever if you're not ready to call the Design System home yet.  You can make a contribution and then move on.  Come back and help when you’re ready again.

## Become a Partner
We highly value contributors who make major contributions over time, thus becoming a trusted Partner with shared ownership in a part of the Design System.  You become someone with deep knowledge and expertise around some parts of the Design System.  You help the Design System product and project become stronger.  It’s going to be awesome to spend time and effort with you on the project, look back, and see the significant contributions that you’ve made!

## Ways we collaborate
We are flexible in our modes of collaboration.  Whatever works best for you as the contributor and the Design System project together will be what we strive for.

We generally prefer collaborating through pull requests as an asynchronous mode that allows the small Design System team to serve many teams simultaneously and continue to work toward the ongoing vision of the project.

We will make ourselves available to one-on-one in-person or remote collaboration, including pairing.  This is especially useful when we’re just getting started together on a new feature, when design direction is not yet clear, when some feature is particularly difficult, or for other reasons.  

## Code requirements
When you go to add code to the Design System, consider these few requirements first.  

Follow pre-existing conventions.  We want to make it easy to move between packages in the Design System, and following precedent will help packages feel similar.  We value innovation to complete new tasks or advance the overall quality of the Design System.

Test your code.  Extract important logic and use unit tests to exercise it.  Use snapshot tests to record healthy UI states.  Use the Design System Reference Site and/or a tool like [Storybook](https://github.com/storybooks/storybook) to provide a quick-feedback visual environment for developing components.

Use the Design System to build the Design System where possible (ie, especially use Core when building Components).

## Submitting your PR
[PRs](https://github.com/pluralsight/design-system/compare) are the main mode of adding or changing code in the Design System. Use the [Github pull request template](https://github.com/pluralsight/design-system/blob/master/.github/PULL_REQUEST_TEMPLATE.md) when submitting a pull request.  The template prompts for context and reasoning around the submission.  

Every code submission requires a review by the Design System team.  Be used to multiple iterations of feedback in a PR.  We'll ask questions back and forth of each other. If you have other people with relevant insights from other teams, please invite them to review your code as well.  

## After the PR is submitted
When a PR is submitted, we will insert its review into our pre-existing priority queue of work.  We will notify you via Github when we intend to finish the review.  We will complete the first review within a max of 7 days of your PR being submitted, usually less.  

New designs are potentially reviewed by the entire design group.  The PR must be merged by the Design System team.  Any other people with helpful insight are welcome to offer their feedback in a review.

## After the merge
When your PR is merged, the Design System team will publish new versions of affected packages.  Please use the new packages as soon as convenient, and try them out in real world situations.  Stay in touch and work out adjustments that need to be made either through new PRs or requests for assistance.

It worked!  Let’s do that again.
`}</Doc>
    </Content>
  </Chrome>
)
