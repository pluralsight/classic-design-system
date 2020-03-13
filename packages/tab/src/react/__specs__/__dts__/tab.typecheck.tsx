import * as React from 'react'
import { MouseEvent } from 'react'

import Tab from '../../../index'

const tab = (
    <Tab.Panel labelledBy="label" className="tabPanel">
        <Tab.List>
            <Tab.ListItem
                id="label"
                href="url"
                innerRef={(el : HTMLAnchorElement | null) => {}}>
                    anchor
            </Tab.ListItem>
            <Tab.ListItem
                id={3}
                onClick={(ev: MouseEvent) => {}}
                innerRef={(el : HTMLButtonElement | null) => {}}>
                    button
            </Tab.ListItem>
        </Tab.List>
    </Tab.Panel>
)