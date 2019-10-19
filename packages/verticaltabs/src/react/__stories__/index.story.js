import { storiesOf } from '@storybook/react'
import React from 'react'
import Icon from '@pluralsight/ps-design-system-icon/react.js'
import VerticalTabs from '../index.js'

storiesOf('VerticalTabs', module)
  .addDecorator(story => (
    <div style={{ height: '100%', width: '240px' }}>{story()}</div>
  ))
  .add('No Group', _ => (
    <VerticalTabs>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header>Dashboard</VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier1
        header={<VerticalTabs.Tier1.Header>Account</VerticalTabs.Tier1.Header>}
      />
      <VerticalTabs.Tier1
        active
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            People
          </VerticalTabs.Tier1.Header>
        }
      >
        <VerticalTabs.Tier2
          active
          header={
            <VerticalTabs.Tier2.Header>Organization</VerticalTabs.Tier2.Header>
          }
        />
        <VerticalTabs.Tier2
          header={<VerticalTabs.Tier2.Header>Admins</VerticalTabs.Tier2.Header>}
        />
        <VerticalTabs.Tier2
          header={
            <VerticalTabs.Tier2.Header>Managers</VerticalTabs.Tier2.Header>
          }
        />
        <VerticalTabs.Tier2
          header={
            <VerticalTabs.Tier2.Header>
              Unassigned users
            </VerticalTabs.Tier2.Header>
          }
        />
      </VerticalTabs.Tier1>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Pending invites
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Analytics
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Log
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Divider />
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Item label
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Item label
          </VerticalTabs.Tier1.Header>
        }
      />
    </VerticalTabs>
  ))
  .add('Group', _ => (
    <VerticalTabs>
      <VerticalTabs.Group
        header={
          <VerticalTabs.Group.Header>Introduction</VerticalTabs.Group.Header>
        }
      >
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header>Install</VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header>Design assets</VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header>Contribute</VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header>Roadmap</VerticalTabs.Tier1.Header>
          }
        />
      </VerticalTabs.Group>
      <VerticalTabs.Divider />
      <VerticalTabs.Group
        header={
          <VerticalTabs.Group.Header>Foundations</VerticalTabs.Group.Header>
        }
      >
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Color
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Typography
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Spacing
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Iconography
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Voice & Tone
            </VerticalTabs.Tier1.Header>
          }
        />
      </VerticalTabs.Group>
      <VerticalTabs.Divider />
      <VerticalTabs.Group
        header={
          <VerticalTabs.Group.Header>Components</VerticalTabs.Group.Header>
        }
      >
        <VerticalTabs.Tier1
          active
          header={<VerticalTabs.Tier1.Header>Avatar</VerticalTabs.Tier1.Header>}
        >
          <VerticalTabs.Tier2
            active
            header={
              <VerticalTabs.Tier2.Header>Prop types</VerticalTabs.Tier2.Header>
            }
          />
          <VerticalTabs.Tier2
            header={
              <VerticalTabs.Tier2.Header>Guidelines</VerticalTabs.Tier2.Header>
            }
          />
        </VerticalTabs.Tier1>
        <VerticalTabs.Tier1
          header={<VerticalTabs.Tier1.Header>Button</VerticalTabs.Tier1.Header>}
        />
        <VerticalTabs.Tier1
          header={<VerticalTabs.Tier1.Header>Badge</VerticalTabs.Tier1.Header>}
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header>Breadcrumb</VerticalTabs.Tier1.Header>
          }
        />
      </VerticalTabs.Group>
    </VerticalTabs>
  ))
  .add('CollapsibleGroup', _ => (
    <VerticalTabs>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header icon={<Icon id={Icon.ids.placeholder} />}>
            Reports home
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.CollapsibleGroup
        startOpen
        header={
          <VerticalTabs.CollapsibleGroup.Header>
            Operational Reports
          </VerticalTabs.CollapsibleGroup.Header>
        }
      >
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Work log
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Project timeline
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Leaderboard
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Retrospective
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Snapshot
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Daily update
            </VerticalTabs.Tier1.Header>
          }
        />
        <VerticalTabs.Tier1
          header={
            <VerticalTabs.Tier1.Header
              icon={<Icon id={Icon.ids.placeholder} />}
            >
              Spot check
            </VerticalTabs.Tier1.Header>
          }
        />
      </VerticalTabs.CollapsibleGroup>
      <VerticalTabs.CollapsibleGroup
        header={
          <VerticalTabs.CollapsibleGroup.Header>
            Reviews & Collaboration
          </VerticalTabs.CollapsibleGroup.Header>
        }
      />
      <VerticalTabs.CollapsibleGroup
        header={
          <VerticalTabs.CollapsibleGroup.Header>
            Fundamentals
          </VerticalTabs.CollapsibleGroup.Header>
        }
      />
    </VerticalTabs>
  ))
  .add('Active tiers', _ => (
    <VerticalTabs>
      <VerticalTabs.Tier1
        active
        header={
          <VerticalTabs.Tier1.Header
            onClick={_ => {}}
            icon={<Icon id={Icon.ids.placeholder} />}
          >
            Tier 1 active
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier2
        active
        header={
          <VerticalTabs.Tier2.Header onClick={_ => {}}>
            Tier 2 active
          </VerticalTabs.Tier2.Header>
        }
      />
    </VerticalTabs>
  ))
  .add('Long text', _ => (
    <VerticalTabs>
      <VerticalTabs.Group
        header={
          <VerticalTabs.Group.Header>
            The technology skills platform
          </VerticalTabs.Group.Header>
        }
      />
      <VerticalTabs.CollapsibleGroup
        header={
          <VerticalTabs.CollapsibleGroup.Header>
            The technology skills platform
          </VerticalTabs.CollapsibleGroup.Header>
        }
      />
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header>
            The technology skills platform
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier2
        header={
          <VerticalTabs.Tier2.Header>
            The technology skills platform
          </VerticalTabs.Tier2.Header>
        }
      />
    </VerticalTabs>
  ))
  .add('Href changes tier tag to link', _ => (
    <VerticalTabs>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header href=" ">
            Tier 1 link
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier2
        header={
          <VerticalTabs.Tier2.Header href=" ">
            Tier 2 link
          </VerticalTabs.Tier2.Header>
        }
      />
    </VerticalTabs>
  ))
  .add('onClick no href changes tier tag to button', _ => (
    <VerticalTabs>
      <VerticalTabs.Tier1
        header={
          <VerticalTabs.Tier1.Header onClick={_ => {}}>
            Tier 1 button
          </VerticalTabs.Tier1.Header>
        }
      />
      <VerticalTabs.Tier2
        header={
          <VerticalTabs.Tier2.Header onClick={_ => {}}>
            Tier 2 button
          </VerticalTabs.Tier2.Header>
        }
      />
    </VerticalTabs>
  ))
