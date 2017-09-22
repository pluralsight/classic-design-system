import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import Text from '@pluralsight/ps-design-system-text/react'

import {
  Chrome,
  Code,
  Content,
  Heading,
  Link,
  P,
  SectionHeading,
  TextLink,
  withServerProps
} from '../src/ui'

const work = {
  now: [
    {
      title: 'Contribution Process',
      tags: ['Site']
    }
  ],
  next: [
    {
      title: 'Sketch Libraries',
      tags: ['Resources']
    },
    {
      title: 'Link',
      tags: ['Component']
    },
    {
      title: 'Feed',
      tags: ['Site']
    },
    {
      title: 'Prop Type Table',
      tags: ['Site']
    },
    {
      title: 'Navigation Updates',
      tags: ['Site']
    },
    {
      title: 'Motion',
      tags: ['Core']
    },
    {
      title: 'Tag',
      tags: ['Component']
    },
    {
      title: 'View Toggle',
      tags: ['Component']
    },
    {
      title: 'Theming',
      tags: ['Component']
    }
  ],
  future: [
    {
      title: 'Tooltip / Popover',
      tags: ['Component']
    },
    {
      title: 'Progress Loader',
      tags: ['Component']
    },
    {
      title: 'Writing Style',
      tags: ['Guidelines']
    },
    {
      title: 'Layout',
      tags: ['Core']
    },
    {
      title: 'Text (vNext)',
      tags: ['Component']
    },
    {
      title: 'Tab (vNext)',
      tags: ['Component']
    },
    {
      title: 'Banner',
      tags: ['Component']
    },
    {
      title: 'Text Input',
      tags: ['Component']
    },
    {
      title: 'Breadcrumb',
      tags: ['Component']
    },
    {
      title: 'Switch',
      tags: ['Component']
    },
    {
      title: 'Modal',
      tags: ['Component']
    },
    {
      title: 'Dialog',
      tags: ['Pattern']
    },
    {
      title: 'Blank State',
      tags: ['Pattern']
    },
    {
      title: 'Error Pages',
      tags: ['Pattern']
    },
    {
      title: 'Data Table',
      tags: ['Pattern']
    }
  ]
}

const Purpose = props =>
  <div className="purpose">
    {props.children}
    <style jsx>{`
      .purpose {
        font-size: ${core.type.fontSizeMedium};
        line-height: ${core.type.lineHeightExtra};
        font-weight: ${core.type.fontWeightXLight};
      }
    `}</style>
  </div>

const Bar = _ =>
  <div aria-hidden="true" className="bar">
    <style jsx>{`
      .bar {
        height: 0;
        overflow: hidden;
        padding-bottom: ${core.layout.spacingXLarge};
        border-bottom: 1px solid ${core.colors.gray01};
        margin-bottom: ${core.layout.spacingSmall};
      }
    `}</style>
  </div>

const Tasks = props =>
  <div className="tasks" style={{ borderLeftColor: props.color }}>
    {props.tasks.map(item =>
      <Task key={item.title} item={item}>
        <Task.Title>{item.title}</Task.Title>
        <Task.Tags tags={item.tags} />
      </Task>
    )}
    <style jsx>{`
      .tasks {
        display: flex;
        flex-wrap: wrap;
        margin: 0 calc(${core.layout.spacingMedium} / -2) 0 0;
        border-left-style: solid;
        border-left-width: 5px;
        padding-left: ${core.layout.spacingXSmall};
      }
    `}</style>
  </div>

const GithubIcon = _ =>
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#FFFFFF" cx="12" cy="12" r="12" />
    <path
      d="M12.0021156,2.52207031 C6.76737054,2.52207031 2.52207031,6.76678852 2.52207031,12.0032796 C2.52207031,16.1921233 5.23838731,19.7453942 9.0058439,20.999079 C9.48019538,21.0863829 9.65305721,20.7936237 9.65305721,20.5421883 C9.65305721,20.3175261 9.64490884,19.7209491 9.64025263,18.9299753 C7.00309122,19.5026892 6.44667402,17.6588297 6.44667402,17.6588297 C6.01539249,16.5634561 5.39378835,16.2718609 5.39378835,16.2718609 C4.53297137,15.6840143 5.4589753,15.6956548 5.4589753,15.6956548 C6.41058839,15.7625879 6.91113105,16.6728771 6.91113105,16.6728771 C7.75681535,18.1215407 9.13039754,17.7030637 9.670518,17.4603587 C9.7566579,16.848067 10.001691,16.4301721 10.2723333,16.1932874 C8.16714393,15.9540745 5.9536977,15.1404017 5.9536977,11.5073932 C5.9536977,10.4725503 6.32328443,9.62570197 6.9297559,8.96335598 C6.83197547,8.72356112 6.50662274,7.75914345 7.02288011,6.45424036 C7.02288011,6.45424036 7.81851014,6.19931282 9.62977615,7.42622438 C10.3858284,7.21553084 11.1971731,7.11076609 12.0032796,7.10669191 C12.8088041,7.11076609 13.6195668,7.21553084 14.3767831,7.42622438 C16.1868851,6.19931282 16.981351,6.45424036 16.981351,6.45424036 C17.4987725,7.75914345 17.1734197,8.72356112 17.0762213,8.96335598 C17.6838568,9.62570197 18.0505335,10.4725503 18.0505335,11.5073932 C18.0505335,15.1497141 15.8335951,15.9511644 13.7220035,16.185721 C14.0619068,16.4784803 14.3651426,17.0570145 14.3651426,17.9416945 C14.3651426,19.2087659 14.353502,20.2313862 14.353502,20.5421883 C14.353502,20.7959518 14.5246178,21.0910391 15.0053716,20.9984969 C18.769918,19.741902 21.4839069,16.1909592 21.4839069,12.0032796 C21.4839069,6.76678852 17.2386067,2.52207031 12.0021156,2.52207031"
      fill="#CCCCCC"
    />
  </svg>

const GithubCat = props => {
  return (
    <div className="cat">
      <GithubIcon />
      <style jsx>{`
        .cat {
          margin-left: auto;
          height: 24px;
          width: 24px;
        }
      `}</style>
    </div>
  )
}

const Task = props => {
  const { item } = props
  const title = item.tags.indexOf('Site') > -1
    ? `site: ${item.title} Roadmap Discussion`
    : item.title.toLowerCase().replace(/ /g, '-').replace(/[\(\)]/g, '') +
        ': Roadmap Discussion'
  const href = item.href
    ? item.href
    : `https://github.com/pluralsight/design-system/issues/new?title=${title}`
  return (
    <a href={href} target="_blank" className="task">
      {props.children}
      <style jsx>{`
      .task {
        text-decoration: none;
        color: inherit;
        display: block;
        width: calc(33.333% - ${core.layout.spacingMedium});
        margin: calc(${core.layout.spacingMedium} / 2);
        background: ${core.colors.bone};
        padding: ${core.layout.spacingMedium};
        border-radius: 12px;
        border: 2px solid transparent;
        transition: all ${core.motion.speedNormal};
      }
      .task:focus,
      .task:hover {
        border: 2px solid ${core.colors.gray01};
        outline: none;
        background: ${core.colors.white};
      }
    `}</style>
    </a>
  )
}

Task.Title = props =>
  <div className="title">
    {props.children}
    <style jsx>{`
      .title {
        margin: 0 0 ${core.layout.spacingSmall} 0;
        font-size: ${core.type.fontSizeMedium};
        font-weight: ${core.type.fontWeightMedium};
      }
    `}</style>
  </div>

Task.Tags = props =>
  <div className="tags">
    {props.tags.map(tag => <Task.Tag key={tag}>{tag}</Task.Tag>)}
    <GithubCat />
    <style jsx>{`
      .tags {
        display: flex;
      }
    `}</style>
  </div>

Task.Tag = props =>
  <div className="tag">
    <Badge appearance={Badge.appearances.stroke}>{props.children}</Badge>
    <style jsx>{`
      .tag {
        overflow: hidden;
      }
    `}</style>
  </div>

export default withServerProps(_ =>
  <Chrome>
    <Content title="Install">
      <Heading size="xxLarge">
        <h1>Roadmap</h1>
      </Heading>
      <Purpose>
        The Roadmap aims to expose what current is and what future work will be
        tackled in the Design System. Explore the items below and follow them on
        to Github for more details and to join the conversation to promote or
        explore these or other items.
      </Purpose>
      <Bar />
      <SectionHeading>Now</SectionHeading>
      <P>
        What the team is working on currently. These issues are started and we
        anticipate completing them.
      </P>
      <Tasks color={core.colors.green} tasks={work.now} />

      <Bar />
      <SectionHeading>Next</SectionHeading>
      <P>
        Here is what we think is coming up quickly (roughly this quarter).
        Priorities often change. Voice your thoughts on any of these issues,
        including priority, on{' '}
        <TextLink href="https://github.com/pluralsight/design-system/issues">
          Github
        </TextLink>, or take a look at how you can{' '}
        <TextLink href="/contribute">contribute</TextLink>.
      </P>
      <Tasks color={core.colors.yellow} tasks={work.next} />

      <Bar />
      <SectionHeading>Future</SectionHeading>
      <P>
        Longer-term ideas. These are deemed to add value but are in need of more
        concrete discovery and prioritization.
      </P>
      <Tasks color={core.colors.pink} tasks={work.future} />
    </Content>
  </Chrome>
)
/*



 */
