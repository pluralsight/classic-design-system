import { FunctionComponent, ReactChild, Component, MouseEvent } from 'react'

interface Styling {
    css?: Record<string, string>
    style?: Record<string, string>
}

interface ListProps {
    className?: string
}

type List = FunctionComponent<ListProps & Styling>

interface ListItemProps {
    id: string | number
    active?: boolean
    children?: string
    className?: string
}
interface ListItemAnchorProps {
    href: string
    onClick?: (event: MouseEvent) => void
    innerRef?: (element: HTMLAnchorElement | null) => void
}
interface ListItemButtonProps {
    onClick: (event: MouseEvent) => void
    innerRef?: (element: HTMLButtonElement | null) => void
}

type ListItem = FunctionComponent<ListItemProps & (ListItemAnchorProps | ListItemButtonProps) & Styling>

interface PanelProps {
    className?: string
    labelledBy: string | number
}

type Panel = FunctionComponent<PanelProps & Styling>

declare const exports: {
    ListItem: ListItem
    List: List
    Panel: Panel
}

export default exports
