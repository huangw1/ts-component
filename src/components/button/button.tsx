import cn from 'classnames'
import * as React from 'react'
import {IActionProps, removeNonHTMLProps, IAppearanceProps} from "../../common/props";
import * as classes from "../../common/classes";
import {PREFIX} from "../../common/constants";

import './button.scss'

const getButtonClasses = (props: IButtonProps) => {
    return cn(
        `${PREFIX}-btn`,
        classes.getIconClass(props.iconName),
        {
            [`${PREFIX}-btn-disabled`]: props.disabled,
            [`${PREFIX}-btn-${props.type}`]: props.type,
            [`${PREFIX}-btn-${props.size}`]: props.size
        },
        props.className
    )
}

const maybeRenderIcon: (iconName: string) => React.ReactNode = (iconName: string) => {
    if (iconName == null) {
        return ''
    }
    return <span className={cn(`${PREFIX}-icon`, classes.getIconClass(iconName))}/>
}

export interface IButtonProps extends IActionProps, IAppearanceProps {
    elementRef?: (ref: HTMLElement) => any,
    rightIconName?: string,
    leftIconName?: string,
}

/**
 * icon 待完善
 */
export class Button extends React.Component<IButtonProps, {}> {
    public static readonly displayName = 'Ts:Button'

    public render() {
        return (
            <button
                {...removeNonHTMLProps(this.props)}
                className={getButtonClasses(this.props)}
                ref={this.props.elementRef}
                type="button"
            >
                {maybeRenderIcon(this.props.leftIconName)}
                {this.props.text}
                {this.props.children}
                {maybeRenderIcon(this.props.rightIconName)}
            </button>
        )
    }
}
