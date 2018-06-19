import core from '@pluralsight/ps-design-system-core'
import {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage
} from '@pluralsight/ps-design-system-errors/react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Heading,
  Intro,
  P,
  PageHeading,
  PropTypes,
  SectionHeading,
  TextLink,
  withServerProps
} from '../../src/ui'

export default withServerProps(_ => (
  <Chrome>
    <Content title="Errors">
      <PageHeading packageName="errors">Errors</PageHeading>

      <Intro>
        Error page components are mean to be full-page, layout components. These
        pages are standardized throughout the product experience.
      </Intro>

      <P>Install the component dependency:</P>
      <Code language="bash">
        npm install @pluralsight/ps-design-system-errors
      </Code>

      <P>Include a React component in your project:</P>
      <Code language="javascript">
        {`import {
  ForbiddenErrorPage,
  NotFoundErrorPage,
  InternalServerErrorPage,
  ServiceUnavailableErrorPage
} from '@pluralsight/ps-design-system-errors/react'`}
      </Code>

      <SectionHeading>Forbidden Error Page</SectionHeading>
      <P>
        <TextLink href="https://httpstatuses.com/403">403 Forbidden</TextLink> -
        The request was a valid request, but the server is refusing to respond
        to it. 403 error semantically means "unauthorized", i.e. the user does
        not have the necessary permissions for the resource.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ ForbiddenErrorPage }}
        codes={[`<ForbiddenErrorPage />`]}
      />
      <PropTypes
        title="ForbiddenErrorPage PropTypes"
        props={[
          PropTypes.row([
            'href',
            'string',
            null,
            <code>https://help.pluralsight.com/help/contact-us</code>,
            <span>Destination of "Contact support" button</span>
          ])
        ]}
      />

      <SectionHeading>Not Found Error Page</SectionHeading>
      <P>
        <TextLink href="https://httpstatuses.com/404">404 Not Found</TextLink> -
        The requested resource could not be found but may be available in the
        future. Subsequent requests by the client are permissible.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ NotFoundErrorPage }}
        codes={[`<NotFoundErrorPage />`]}
      />
      <PropTypes
        title="NotFoundErrorPage PropTypes"
        props={[
          PropTypes.row([
            'action',
            'string',
            null,
            <code>/library/search</code>,
            <span>
              Search form destination; handles <code>q</code> query string
            </span>
          ])
        ]}
      />

      <SectionHeading>Internal Server Error Page</SectionHeading>
      <P>
        <TextLink href="https://httpstatuses.com/500">
          500 Internal Server Error
        </TextLink>{' '}
        - A generic error message, given when an unexpected condition was
        encountered and no more specific message is suitable.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ InternalServerErrorPage }}
        codes={[`<InternalServerErrorPage />`]}
      />
      <PropTypes
        title="InternalServerErrorPage PropTypes"
        props={[
          PropTypes.row([
            'href',
            'string',
            null,
            <code>https://help.pluralsight.com/help/contact-us</code>,
            <span>Destination of "Contact support" button</span>
          ])
        ]}
      />

      <SectionHeading>Service Unavailable Error Page</SectionHeading>
      <P>
        <TextLink href="https://httpstatuses.com/503">
          503 Service Unavailable
        </TextLink>{' '}
        - The server is currently unavailable (because it is overloaded or down
        for maintenance). Generally, this is a temporary state.
      </P>
      <Example.React
        themeToggle
        orient="vertical"
        includes={{ ServiceUnavailableErrorPage }}
        codes={[`<ServiceUnavailableErrorPage />`]}
      />
    </Content>
  </Chrome>
))
