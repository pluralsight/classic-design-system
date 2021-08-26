import React from 'react';
interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement>, Record<string, unknown> {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    indeterminate?: boolean;
    label: React.ReactNode;
    name?: string;
    onCheck?: (evt: React.KeyboardEvent<HTMLLabelElement> | React.MouseEvent<HTMLLabelElement, MouseEvent>, checked: boolean, value: React.ReactText, name: string | undefined) => void;
    value: string | number;
}
declare const Checkbox: React.ForwardRefExoticComponent<Pick<CheckboxProps, React.ReactText> & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
