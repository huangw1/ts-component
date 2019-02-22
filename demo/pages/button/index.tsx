import * as React from 'react'
import {Stack} from "../../components/stack/stack";
import {Card, CardSection} from "../../components/card/card";

import {Button} from '../../../src';
import {SizeKind, TypeKind} from "../../../src";

export default class ButtonDemo extends React.Component {
    public static readonly displayName = 'ButtonDemo'

    public render() {
        return (
            <Card title="按钮组件">
                <CardSection title="按钮类型">
                    <Card>
                        <Stack>
                            <Button>Default</Button>
                            <Button type={TypeKind.PRIMARY}>Primary</Button>
                            <Button type={TypeKind.SUCCESS}>Success</Button>
                        </Stack>
                    </Card>
                </CardSection>
                <CardSection title="按钮尺寸">
                    <Card>
                        <Stack>
                            <Button size={SizeKind.SMALL}>Small</Button>
                            <Button type={TypeKind.PRIMARY}>Default</Button>
                            <Button type={TypeKind.SUCCESS} size={SizeKind.LARGE}>Large</Button>
                        </Stack>
                    </Card>
                </CardSection>
            </Card>
        )
    }
}
