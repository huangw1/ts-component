import * as React from 'react'
import * as cn from 'classnames'
import {IOverlayProps, Overlay} from "../overlay/overlay";
import {IProps} from "../../common/props";
import * as classes from "../../common/classes";
import {Button} from "../button/button";
import {PREFIX} from "../../common/constants";

import './dialog.scss'
import {SizeKind} from "../..";

export interface IDialogProps extends IOverlayProps, IProps {
    icon?: string,
    isCloseButtonShow?: boolean,
    style?: React.CSSProperties,
    title?: React.ReactNode,
}

/**
 * icon 待完善
 */
export class Dialog extends React.Component<IDialogProps> {
    public static readonly displayName = 'Ts:Dialog'

    public static defaultProps = {
        hasBackdrop: true,
        canOutsideClickClose: true,
        isOpen: false
    }

    public render() {
        const {className, style, children, ...others} = this.props
        return (
            <Overlay {...others}>
                <div className={`${PREFIX}-dialog`}>
                    <div className={cn(`${PREFIX}-dialog-content`, className)} style={style}>
                        {this.maybeRenderHeader()}
                        {children}
                    </div>
                </div>
            </Overlay>
        )
    }

    public maybeRenderHeader() {
        if(this.props.title) {
            return (
                <div className={`${PREFIX}-dialog-header`}>
                    {this.maybeRenderIcon()}
                    <h4 className={`${PREFIX}-dialog-header-title`}>{this.props.title}</h4>
                    {this.maybeRenderCloseButton()}
                </div>
            )
        }
        return null
    }

    public maybeRenderIcon() {
        if(this.props.icon) {
            return <span className={cn('ts-icon', classes.getIconClass(this.props.icon))}/>
        }
        return null
    }

    public maybeRenderCloseButton() {
        if(this.props.isCloseButtonShow) {
            return (
                <Button onClick={this.props.onClose} size={SizeKind.SMALL}>
                    x
                </Button>
            )
        }
        return null
    }
}
