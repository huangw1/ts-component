import * as React from 'react'
import cn from 'classnames'
import { createPortal } from 'react-dom'
import {IProps, removeNonHTMLProps} from "../../common/props";
import {safeInvoke} from "../../common/utils";
import {PREFIX} from "../../common/constants";

import './portal.scss'

export interface IPortalProps extends IProps, React.HTMLProps<HTMLDivElement> {
    containerRef?: (ref: HTMLElement) => void,
    onChildrenMount?: () => void,
    container?: HTMLElement
}

export class Portal extends React.Component<IPortalProps>{
    public static readonly displayName = 'Ts:Portal'
    private readonly targetElement: HTMLElement

    public static defaultProps = {
        container: document.body
    }

    constructor(props) {
        super(props);

        const targetElement = document.createElement('div')
        this.targetElement = targetElement
        this.props.container.appendChild(targetElement)
    }

    public componentDidMount() {
        safeInvoke(this.props.onChildrenMount)
    }

    public componentWillUnmount() {
        this.targetElement.remove()
    }

    public render() {
        const classes = cn(`${PREFIX}-portal`, this.props.className)
        return createPortal(<div
            {...removeNonHTMLProps(this.props)}
            className={classes}
            ref={this.props.containerRef}>
            {this.props.children}
        </div>, this.targetElement)
    }
}
