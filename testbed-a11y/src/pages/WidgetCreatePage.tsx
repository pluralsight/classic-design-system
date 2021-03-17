import Breadcrumb from '@pluralsight/ps-design-system-breadcrumb'
import {
  AsideLayout,
  PageWidthLayout
} from '@pluralsight/ps-design-system-layout'
import Form from '@pluralsight/ps-design-system-form'
import Button from '@pluralsight/ps-design-system-button'
import Steps from '@pluralsight/ps-design-system-steps'
import TextArea from '@pluralsight/ps-design-system-textarea'
import TextInput from '@pluralsight/ps-design-system-textinput'
import { Heading, Label, P } from '@pluralsight/ps-design-system-text'
import { FC, MouseEventHandler, useMemo, useState } from 'react'

import styles from './WidgetCreatePage.module.css'

interface Step {
  id: number
  description: string
  title: string
}

export const WidgetCreatePage: FC = () => {
  const steps = useMemo<Step[]>(
    () => [
      {
        id: 0,
        description: 'What this widget should be called?',
        title: 'Title'
      },
      { id: 1, description: 'A brief description.', title: 'Description' },
      { id: 2, description: 'Verify your widget.', title: 'Review' }
    ],
    []
  )

  const [activeStep, setActiveStep] = useState(steps[0].id)
  const nextStep: MouseEventHandler = evt => {
    evt.preventDefault()
    setActiveStep(activeStep + 1)
  }
  const prevStep: MouseEventHandler = evt => {
    evt.preventDefault()
    setActiveStep(activeStep - 1)
  }

  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()

  return (
    <PageWidthLayout className={styles.page}>
      <Breadcrumb>All Widgets</Breadcrumb>

      <Heading size={Heading.sizes.small}>
        <h1>Create a widget</h1>
      </Heading>

      <AsideLayout
        aside={
          <AsideLayout.Aside>
            <Steps orientation="vertical">
              {steps.map(step => {
                const status =
                  step.id === activeStep
                    ? Steps.statuses.current
                    : step.id < activeStep
                    ? Steps.statuses.completed
                    : Steps.statuses.incomplete
                const description =
                  status === Steps.statuses.current && step.description

                return (
                  <Steps.Step description={description} status={status}>
                    {step.title}
                  </Steps.Step>
                )
              })}
            </Steps>
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            <form>
              <Form.VerticalLayout>
                {activeStep === 0 && (
                  <TextInput
                    name="title"
                    label="Title"
                    onChange={evt => setTitle(evt.target.value)}
                    required
                    value={title}
                  />
                )}

                {activeStep === 1 && (
                  <TextArea
                    name="description"
                    label="Description"
                    onChange={evt => setDescription(evt.target.value)}
                    required
                    value={description}
                  />
                )}

                {activeStep === 2 && (
                  <div>
                    <Label>Title</Label>
                    <P>{title}</P>

                    <Label>Description</Label>
                    <P>{description}</P>
                  </div>
                )}

                <Form.ButtonRow>
                  <Button
                    appearance={Button.appearances.secondary}
                    disabled={activeStep <= 0}
                    onClick={prevStep}
                  >
                    Previous
                  </Button>

                  {activeStep < steps.length - 1 && (
                    <Button type="submit" onClick={nextStep}>
                      Next
                    </Button>
                  )}

                  {activeStep === steps.length - 1 && (
                    <Button type="submit">Submit</Button>
                  )}
                </Form.ButtonRow>
              </Form.VerticalLayout>
            </form>
          </AsideLayout.Main>
        }
      />
    </PageWidthLayout>
  )
}
