import React from 'react'
import { action } from '@storybook/addon-actions'
import addons from '@storybook/addons'
import { css } from 'glamor'
import { storiesOf } from '@storybook/react'
import themeDecorator from '@pluralsight/ps-design-system-storybook-addon-theme'
import SortableTable from './sortable'
import RegularTable from './regular'
import NestedTable from './nested'
import CustomTable from './custom'
import {
	grow2,
	grow3,
	grow4,
} from './column-preference'
import CompleteTable from './complete'
import IconsTable from './icons'

storiesOf('Table', module)
  .addDecorator(story => <div {...css({ padding: '50px' })}>{story()}</div>)
  .addDecorator(themeDecorator(addons))
  .add('regular', _ => RegularTable())
  .add('custom components', _ => CustomTable())
  .add('icons', _ => IconsTable())
  .add('sortable with loader', _ => SortableTable())
  .add('nested', _ => NestedTable())
  .add('all features', _ => CompleteTable())

storiesOf('Table/column preference', module)
  .addDecorator(story => <div {...css({ padding: '50px' })}>{story()}</div>)
  .addDecorator(themeDecorator(addons))
  .add('grow 2', () => grow2())
  .add('grow 3', () => grow3())
  .add('grow 4', () => grow4())