import React from 'react'
import './ButtonPageStyles.css'

type ButtonBaseProps = {
    children: string;
}

type PrimaryButtonProps = ButtonBaseProps & {primary: boolean, secondary?: never, destructive?: never} 
type SecondaryButtonProps = ButtonBaseProps & {primary?: never, secondary: boolean, destructive?: never} 
type DestructiveButtonProps = ButtonBaseProps & {primary?: never, secondary?: never, destructive: boolean} 

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = 
    (PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps) 
    & {as?: E}

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> & Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

const createClassNames = (classes: { [key: string]: boolean }): string => {
    let classNames = '';
    for (const [key, value] of Object.entries(classes)) {
      if (value) classNames += key + ' ';
    }
    return classNames.trim();
};

const defaultElement = 'button';

function Button<E extends React.ElementType = typeof defaultElement>({
    children,   
    primary = false,
    secondary = false,
    destructive = false,
    as,
    ...props
}: ButtonProps<E>) {
    const classNames = createClassNames({ primary, secondary, destructive });
    const TagName = as || defaultElement

    return <TagName className={classNames} {...props}>{children}</TagName>;
}

export const ButtonPage = () => {
    return (
        <div>
            <h1>Button page!!</h1>
            <div className="button-container">
                <Button children="Primary" primary/>
                <Button children="Secondary" secondary/>
                <Button children="Destructive" destructive/>
                <Button children="polymorphic button" primary as="a" href="/abc" id="abc"/>
            </div>
        </div>
    )
}
