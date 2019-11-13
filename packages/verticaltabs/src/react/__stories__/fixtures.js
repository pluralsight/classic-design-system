import React from 'react'
import Icon from '@pluralsight/ps-design-system-icon'

export const FLOW_NAV = [
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon id={Icon.ids.placeholder} />,
      id: 'reports-home',
      title: 'Reports Home'
    },
    items: []
  },
  {
    collapsible: true,
    header: {
      icon: <Icon id={Icon.ids.placeholder} />,
      id: 'operational-reports',
      title: 'Operational Reports'
    },
    items: [
      {
        href: '#',
        id: 'work-log',
        title: 'Work Log'
      },
      {
        href: '#',
        id: 'project-timeline',
        title: 'Project Timeline'
      },
      {
        href: '#',
        id: 'leaderboard',
        title: 'Leaderboard'
      },
      {
        href: '#',
        id: 'snapshot',
        title: 'Snapshot'
      },
      {
        href: '#',
        id: 'daily-updates',
        title: 'Daily Updates'
      },
      {
        href: '#',
        id: 'spot-check',
        title: 'Spot Check'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <Icon id={Icon.ids.placeholder} />,
      id: 'review-collaborate',
      title: 'Review & Collaborate'
    },
    items: [
      {
        href: '#',
        id: 'review-workflow',
        title: 'Review Workflow'
      },
      {
        href: '#',
        id: 'review-collab',
        title: 'Review Collaboration'
      },
      {
        href: '#',
        id: 'pr-resolution',
        title: 'PR Resolution'
      },
      {
        href: '#',
        id: 'knowledge-sharing',
        title: 'Knowledge Sharing'
      },
      {
        href: '#',
        id: 'player-card',
        title: 'Player Card'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <Icon id={Icon.ids.placeholder} />,
      id: 'delivery',
      title: 'Delivery'
    },
    items: [
      {
        href: '#',
        title: 'Retrospective'
      }
    ]
  },
  {
    collapsible: true,
    header: {
      icon: <Icon id={Icon.ids.placeholder} />,
      id: 'fundamentals',
      title: 'Fundamentals'
    },
    items: [
      {
        href: '#',
        id: 'fundamentals-code',
        title: 'Code'
      },
      {
        href: '#',
        id: 'fundamentals-submit',
        title: 'Submit'
      },
      {
        href: '#',
        id: 'fundamentals-review',
        title: 'Review'
      }
    ]
  }
]
