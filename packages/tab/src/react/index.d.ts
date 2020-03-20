import { FunctionComponent, MouseEvent } from 'react'

interface Styling {
    css?: Record<string, string | number>
    style?: Record<string, string | number>
    className?: string
}

interface ListProps {}  //leaving here so users can augment the interface with additional props if needed

type List = FunctionComponent<ListProps & Styling>

interface ListItemProps {
    id: string | number
    active?: boolean
    children?: string
    onClick?: (i: number, event: MouseEvent) => void
}
interface ListItemAnchorProps {
    href: string
    innerRef?: (element: HTMLAnchorElement | null) => void
}
interface ListItemButtonProps {
    innerRef?: (element: HTMLButtonElement | null) => void
}

type ListItem = FunctionComponent<ListItemProps & (ListItemAnchorProps | ListItemButtonProps) & Styling>

interface PanelProps {
    labelledBy: string | number
}

type Panel = FunctionComponent<PanelProps & Styling>

declare const exports: {
    ListItem: ListItem
    List: List
    Panel: Panel
}

export default exports
