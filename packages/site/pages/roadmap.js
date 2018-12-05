import Badge from '@pluralsight/ps-design-system-badge/react'
import core from '@pluralsight/ps-design-system-core'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'

import {
  Chrome,
  Content,
  GithubIcon,
  Intro,
  P,
  PageHeading,
  SectionHeading,
  TextLink,
  withServerProps
} from '../src/ui'

const work = {
  now: [],
  next: [
    {
      title: 'Card (light theme)',
      tags: ['Component']
    },
    {
      title: 'Row (light theme)',
      tags: ['Component']
    },
    {
      title: 'Button (light theme)',
      tags: ['Component']
    },
    {
      title: 'Switch (form work)',
      tags: ['Component']
    },
    {
      title: 'Stats Table',
      tags: ['Component']
    },
    {
      title: 'Progress Bar',
      tags: ['Component']
    },
    {
      title: 'Star Rating',
      tags: ['Component']
    },
    {
      title: 'Paginator',
      tags: ['Component']
    }
  ],
  future: [
    {
      title: 'Blank State',
      tags: ['Pattern']
    },
    {
      title: 'Reporting',
      tags: ['Pattern']
    },
    {
      title: 'Text (vNext)',
      tags: ['Component']
    }
  ]
}

const Bar = _ => (
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
)

const Tasks = props => (
  <div className="tasks" style={{ borderLeftColor: props.color }}>
    {props.tasks.map(item => (
      <Task key={item.title} item={item} />
    ))}
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
)
Tasks.propTypes = {
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  )
}

const GithubCat = props => {
  return (
    <div
      className={`cat ${props.isVisible ? 'cat--is-visible' : ''}`}
      aria-hidden
    >
      <GithubIcon color={Icon.colors.gray01} />
      <style jsx>{`
        .cat {
          margin-left: auto;
          height: 24px;
          width: 24px;
          opacity: 0;
          transition: opacity ${core.motion.speedNormal};
        }
        .cat--is-visible {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}
GithubCat.propTypes = {
  isVisible: PropTypes.bool
}

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.state = { isOver: false }
  }
  handleMouseOver() {
    this.setState({ isOver: true })
  }
  handleMouseOut() {
    this.setState({ isOver: false })
  }
  render() {
    const { item } = this.props
    const title =
      item.tags.indexOf('Site') > -1
        ? `site: ${item.title} Roadmap Discussion`
        : item.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[()]/g, '') + ': Roadmap Discussion'
    const href = item.href
      ? item.href
      : `https://github.com/pluralsight/design-system/issues/new?title=${title}`
    return (
      <a
        href={href}
        target="_blank"
        className="task"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <Task.Title>{item.title}</Task.Title>
        <div className="meta">
          <Task.Tags tags={item.tags} />
          <Task.Helpers helpers={item.helpers} />
          <GithubCat isVisible={this.state.isOver} />
        </div>
        <style jsx>{`
          .task {
            text-decoration: none;
            color: inherit;
            display: block;
            width: 100%;
            margin: calc(${core.layout.spacingMedium} / 2);
            background: ${core.colors.bone};
            padding: ${core.layout.spacingMedium};
            border-radius: 12px;
            border: 2px solid transparent;
            transition: all ${core.motion.speedNormal};
            overflow: hidden;
          }
          .task:focus,
          .task:hover {
            border: 2px solid ${core.colors.gray01};
            outline: none;
            background: ${core.colors.white};
          }
          .meta {
            display: flex;
          }
          @media screen and (min-width: 1000px) {
            .task {
              width: calc(33.333% - ${core.layout.spacingMedium});
            }
          }
        `}</style>
      </a>
    )
  }
}
Task.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
  })
}

Task.Title = props => (
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
)
Task.Title.propTypes = {
  children: PropTypes.node
}

Task.Helpers = props =>
  props.helpers ? (
    <div className="helpers">
      {props.helpers.map(helper => (
        <Badge
          appearance={Badge.appearances.subtle}
          color={Badge.colors.green}
          key={helper}
        >
          {helper}
        </Badge>
      ))}
      <style jsx>{`
        .helpers {
          display: flex;
          margin-left: ${core.layout.spacingXSmall};
        }
      `}</style>
    </div>
  ) : null
Task.Helpers.propTypes = {
  helpers: PropTypes.arrayOf(PropTypes.string)
}

Task.Tags = props => (
  <div className="tags">
    {props.tags.map(tag => (
      <Task.Tag key={tag}>{tag}</Task.Tag>
    ))}
    <style jsx>{`
      .tags {
        display: flex;
      }
    `}</style>
  </div>
)
Task.Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
}

Task.Tag = props => (
  <div className="tag">
    <Badge appearance={Badge.appearances.subtle}>{props.children}</Badge>
    <style jsx>{`
      .tag {
        overflow: hidden;
      }
    `}</style>
  </div>
)
Task.Tag.propTypes = {
  children: PropTypes.node
}

export default withServerProps(_ => (
  <Chrome>
    <Content title="Install">
      <PageHeading>Roadmap</PageHeading>
      <Intro>
        The Roadmap aims to expose what current is and what future work will be
        tackled in the Design System. Explore the items below and follow them on
        to Github for more details and to join the conversation to promote or
        explore these or other items.
      </Intro>
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
        </TextLink>
        , or take a look at how you can{' '}
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
))
/*



 */
