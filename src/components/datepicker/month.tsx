import * as React from 'react';
import * as cn from 'classnames'
import * as dateFns from 'date-fns'
import {IProps} from "../../common/props";
import {PREFIX} from "../../common/constants";
import {Weeks} from "./weeks";
import {getApproxTimestamp, getWeekArray} from "./datePickerUtil";
import {DayCell} from './dayCell';
import {uuid} from "../../common/utils";
import {IDatePickerProps} from './datePicker';

export interface IMonthProps extends IDatePickerProps, IProps {
    month: Date,
}

export class Month extends React.Component<IMonthProps> {
    public static displayName = 'Ts:Month'

    private renderDay = (day: Date) => {
        const {
            month,
            onDayClick,
            onDayMouseEnter,
            onDayMouseLeave,
            onDayMouseDown,
            onDayMouseUp,
            onDayKeyDown,
            onDayKeyUp,
            onDayFocus,
            modifier
        } = this.props

        const isToday = dateFns.isToday(day)
        const isOutside = dateFns.getMonth(day) != dateFns.getMonth(month)
        const tabIndex = isOutside ? -1 : 0
        const dayKey = getApproxTimestamp(day)
        const dayValue = dateFns.getDate(day)

        const dayClasses = cn({
            [`${PREFIX}-date-picker-day-today`]: isToday,
            [`${PREFIX}-date-picker-day-outside`]: isOutside
        }, Object.keys(modifier).map(key => modifier[key](day)))

        return (
            <DayCell key={dayKey}
                     onClick={onDayClick}
                     onMouseEnter={onDayMouseEnter}
                     onMouseLeave={onDayMouseLeave}
                     onMouseDown={onDayMouseDown}
                     onMouseUp={onDayMouseUp}
                     onKeyDown={onDayKeyDown}
                     onKeyUp={onDayKeyUp}
                     onFocus={onDayFocus}
                     className={dayClasses}
                     tabIndex={tabIndex}>
                {dayValue}
            </DayCell>
        )
    }

    public render() {
        const {
            className,
            showWeekDays,
            firstDayOfWeek,
            localeWeekDays,
            localeWeekTitles,
            month
        } = this.props
        const monthClasses = cn(`${PREFIX}-date-picker-month`, className)
        const weekArray = getWeekArray(month, firstDayOfWeek)
        return (
            <div className={monthClasses}>
                {showWeekDays && <Weeks
                    firstDayOfWeek={firstDayOfWeek}
                    localeWeekTitles={localeWeekTitles}
                    localeWeekDays={localeWeekDays}/>
                }
                <div className={`${PREFIX}-date-picker-month-body`}>
                    {weekArray.map(week => {
                        return (
                            <div key={uuid()} className={`${PREFIX}-date-picker-day`}>
                                {week.map(this.renderDay)}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
