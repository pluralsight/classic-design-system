import React from 'react'
import Icon from '@pluralsight/ps-design-system-icon'

export const GITPRIME_NAV = [
  {
    collapsible: false,
    items: [
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'reports-home',
        title: 'Reports Home'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      title: 'Operational Reports'
    },
    items: [
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'work-log',
        title: 'Work Log'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'project-timeline',
        title: 'Project Timeline'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'leaderboard',
        title: 'Leaderboard'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'snapshot',
        title: 'Snapshot'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'daily-updates',
        title: 'Daily Updates'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'spot-check',
        title: 'Spot Check'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      title: 'Review & Collaborate'
    },
    items: [
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'review-workflow',
        title: 'Review Workflow'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'review-collab',
        title: 'Review Collaboration'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'pr-resolution',
        title: 'PR Resolution'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'knowledge-sharing',
        title: 'Knowledge Sharing'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'player-card',
        title: 'Player Card'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      title: 'Delivery'
    },
    items: [
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        title: 'Retrospective'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      title: 'Fundamentals'
    },
    items: [
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'fundamentals-code',
        title: 'Code'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'fundamentals-submit',
        title: 'Submit'
      },
      {
        href: '#',
        icon: <Icon id={Icon.ids.placeholder} />,
        id: 'fundamentals-review',
        title: 'Review'
      }
    ]
  }
]
