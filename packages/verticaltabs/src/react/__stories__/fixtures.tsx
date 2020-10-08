import * as Icon from '@pluralsight/ps-design-system-icon'
import React from 'react'

export const ADMIN_TOOLS_NAV: {
  collapsible: boolean
  header: any
  items: any[]
}[] = [
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon.PlaceholderIcon />,
      id: 'dashboard',
      title: 'Dashboard'
    },
    items: []
  },
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon.PlaceholderIcon />,
      id: 'account',
      title: 'Account'
    },
    items: []
  },
  {
    collapsible: true,
    header: {
      icon: <Icon.PlaceholderIcon />,
      id: 'people',
      title: 'People'
    },
    items: [
      { href: '#', id: 'org', title: 'Organization' },
      { href: '#', id: 'admins', title: 'Admins' },
      { href: '#', id: 'managers', title: 'Managers' },
      { href: '#', id: 'unassigned', title: 'Unassigned users' },
      { href: '#', id: 'pending', title: 'Pending invites' }
    ]
  },
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon.PlaceholderIcon />,
      id: 'analytics',
      title: 'Analytics'
    },
    items: []
  },
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon.PlaceholderIcon />,
      id: 'log',
      title: 'Log'
    },
    items: []
  }
]

export const DESIGN_SYSTEM_NAV: {
  collapsible: boolean
  header: any
  sections: any[]
}[] = [
  {
    collapsible: false,
    header: { title: 'Introduction' },
    sections: [
      { id: 'install', header: { href: '#', title: 'Install' } },
      { id: 'design-assets', header: { href: '#', title: 'Design assets' } },
      { id: 'contrib', header: { href: '#', title: 'Contribute' } },
      { id: 'roadmap', header: { href: '#', title: 'Roadmap' } }
    ]
  },
  {
    collapsible: false,
    header: { title: 'Foundations' },
    sections: [
      {
        id: 'color',
        header: {
          href: '#',
          icon: <Icon.PlaceholderIcon />,
          title: 'Color'
        }
      },
      {
        id: 'typography',
        header: {
          href: '#',
          icon: <Icon.PlaceholderIcon />,
          title: 'Typography'
        }
      },
      {
        id: 'spacing',
        header: {
          href: '#',
          icon: <Icon.PlaceholderIcon />,
          title: 'Spacing'
        }
      },
      {
        id: 'iconography',
        header: {
          href: '#',
          icon: <Icon.PlaceholderIcon />,
          title: 'Iconography'
        }
      },
      {
        id: 'voice-tone',
        header: {
          href: '#',
          icon: <Icon.PlaceholderIcon />,
          title: 'Voice & Tone'
        }
      }
    ]
  },
  {
    collapsible: false,
    header: { title: 'Components' },
    sections: [
      {
        id: 'avatar',
        header: {
          href: '#',
          title: 'Avatar'
        },
        items: [
          {
            href: '#',
            id: 'avatar-prop-types',
            title: 'PropTypes'
          },
          {
            href: '#',
            id: 'avatar-guidelines',
            title: 'Guidelines'
          }
        ]
      },
      {
        id: 'badge',
        header: {
          href: '#',
          title: 'Badge'
        },
        items: []
      },
      {
        id: 'breadcrumb',
        header: {
          href: '#',
          title: 'Breadcrumb'
        },
        items: []
      }
    ]
  }
]

export const FLOW_NAV: {
  collapsible: boolean
  header: any
  items: any[]
}[] = [
  {
    collapsible: false,
    header: {
      href: '#',
      icon: <Icon.PlaceholderIcon />,
      id: 'reports-home',
      title: 'Reports Home'
    },
    items: []
  },
  {
    collapsible: true,
    header: {
      icon: <Icon.PlaceholderIcon />,
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
      icon: <Icon.PlaceholderIcon />,
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
      icon: <Icon.PlaceholderIcon />,
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
      icon: <Icon.PlaceholderIcon />,
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
