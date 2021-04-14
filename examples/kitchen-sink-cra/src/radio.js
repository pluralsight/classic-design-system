import React from 'react'
import Radio from '@pluralsight/ps-design-system-radio'

const Comp = () => (
  <Radio.Group name="courseLevel">
    <Radio.Button value="beginner" label="Beginner" />
    <Radio.Button value="intermediate" label="Intermediate" />
    <Radio.Button value="advanced" label="Advanced" />
  </Radio.Group>
)

export default Comp
