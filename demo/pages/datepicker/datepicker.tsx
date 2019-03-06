import * as React from 'react'
import {Card, CardSection} from "../../components/card/card";
import {DatePicker} from "../../../src";
import {Stack} from '../../components/stack/stack';

export default class DatePickerDemo extends React.Component {
    public static readonly displayName = 'DatePickerDemo'

    public render () {
        return (
            <Card title="DatePicker 组件">
                <CardSection title="示例">
                    <Card>
                        <Stack>
                            <DatePicker month={new Date()}/>
                        </Stack>
                    </Card>
                </CardSection>
            </Card>
        )
    }
}
