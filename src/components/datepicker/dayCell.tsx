import * as React from 'react';
import * as cn from 'classnames'
import {IProps} from "../../common/props";
import {AbstractPureComponent} from "../../common/abstractPureComponent";
import {PREFIX} from "../../common/constants";
import {DayHandler} from './datePickerUtil';
import {safeInvoke} from "../../common/utils";

export interface IDayProps extends IProps {
    day?: Date
    empty?: boolean,
    onClick?: DayHandler,
    onMouseEnter?: DayHandler,
    onMouseLeave?: DayHandler,
    onMouseDown?: DayHandler,
    onMouseUp?: DayHandler,
    onKeyDown?: DayHandler,
    onKeyUp?: DayHandler,
    onFocus?: DayHandler,
    tabIndex?: number
}

export class DayCell extends AbstractPureComponent<IDayProps, {}> {
    public static displayName = 'Ts:DayCell'

    public static defaultProps = {
        empty: false
    }

    private wrapHandler = (handler: DayHandler) => {
        return (event: React.SyntheticEvent) => {
            // persist event ref
            event.persist()
            safeInvoke(handler, this.props.day, event)
        }
    }

    public render() {
        const {
            empty,
            onClick,
            onMouseEnter,
            onMouseLeave,
            onMouseDown,
            onMouseUp,
            onKeyDown,
            onKeyUp,
            onFocus,
            children,
            className,
            tabIndex
        } = this.props
        const dayClasses = cn(`${PREFIX}-date-picker-day-cell`, className)
        if (empty) {
            return <div tabIndex={-1} className={dayClasses}/>
        }
        return (
            <div tabIndex={tabIndex}
                 className={dayClasses}
                 onMouseEnter={this.wrapHandler(onMouseEnter)}
                 onMouseLeave={this.wrapHandler(onMouseLeave)}
                 onMouseDown={this.wrapHandler(onMouseDown)}
                 onMouseUp={this.wrapHandler(onMouseUp)}
                 onKeyDown={this.wrapHandler(onKeyDown)}
                 onKeyUp={this.wrapHandler(onKeyUp)}
                 onFocus={this.wrapHandler(onFocus)}
                 onClick={this.wrapHandler(onClick)}>
                {children}
            </div>
        )
    }
}

