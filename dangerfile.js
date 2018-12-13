import { danger, warn } from 'danger'

const hasValidDescription = github =>
  github.pr.body && github.pr.body.length > 10

if (!hasValidDescription(danger.github))
  warn(':grey_question: This PR does not include a description.')

const hasAssignee = github => github.pr.assignees.length > 0

if (!hasAssignee(danger.github))
  warn(':exclamation: No Assignee: Please assign this PR.')

const hasReviewers = github => github.pr.requested_reviewers.length > 0

if (!hasReviewers(danger.github))
  warn(
    ':exclamation: No Reviewer: Please add some teammates to review your PR.'
  )

const isLargePR = github => {
  const threshold = 1000
  return github.pr.additions + github.pr.deletions > threshold
}

if (isLargePR(danger.github))
  warn(
    ':exclamation: Big PR: <i>Please split it into server smaller PRs to facilitate a better code review.</i>'
  )
