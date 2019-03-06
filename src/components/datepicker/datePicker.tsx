import * as React from 'react';
import * as cn from 'classnames'
import {Month} from "./month";
import {IProps} from "../../common/props";
import {PREFIX} from "../../common/constants";
import {DayHandler, Modifier} from "./datePickerUtil";

import './datepicker.scss'

export interface IDatePickerProps extends IProps {
    month: Date,
    showWeekDays?: boolean,
    firstDayOfWeek?: number,
    localeWeekDays?: [],
    localeWeekTitles?: [],
    modifier?: Modifier,
    selectedDays?: Date | Date[] | Modifier,
    disabledDays?: Date | Date[] | Modifier,
    onDayClick?: DayHandler,
    onDayMouseEnter?: DayHandler,
    onDayMouseLeave?: DayHandler,
    onDayMouseDown?: DayHandler,
    onDayMouseUp?: DayHandler,
    onDayKeyDown?: DayHandler,
    onDayKeyUp?: DayHandler,
    onDayFocus?: DayHandler,
}

export class DatePicker extends React.Component<IDatePickerProps> {
    public static displayName = 'Ts:DatePicker'

    public static defaultProps = {
        modifier: {},
        showWeekDays: true,
        firstDayOfWeek: 0,
        localeWeekDays: ['日', '一', '二', '三', '四', '五', '六'],
        localeWeekTitles: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }

    public render() {
        return (
            <div className={cn(`${PREFIX}-date-picker`, this.props.className)}>
                <Month {...this.props}/>
            </div>
        )
    }
}
