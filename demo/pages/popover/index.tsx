import * as React from 'react'
import {Stack} from "../../components/stack/stack";
import {Card, CardSection} from "../../components/card/card";

import {Popover, Position, PopperInteractionKind} from '../../../src';

export default class PopoverDemo extends React.Component {
    public static readonly displayName = 'PopoverDemo'

    public render() {
        return (
            <Card title="Popover 组件">
                <CardSection title="Position">
                    <Card>
                        <Stack>
                            <Popover position={Position.LEFT} interactionKind={PopperInteractionKind.HOVER_TARGET}>
                                <span>LEFT</span>
                                <div>Position.LEFT</div>
                            </Popover>
                            <Popover position={Position.RIGHT} interactionKind={PopperInteractionKind.HOVER_TARGET}>
                                <span>RIGHT</span>
                                <div>Position.RIGHT</div>
                            </Popover>
                            <Popover position={Position.TOP} interactionKind={PopperInteractionKind.HOVER_TARGET}>
                                <span>TOP</span>
                                <div>Position.TOP</div>
                            </Popover>
                            <Popover position={Position.BOTTOM} interactionKind={PopperInteractionKind.HOVER_TARGET}>
                                <span>BOTTOM</span>
                                <div>Position.BOTTOM</div>
                            </Popover>
                        </Stack>
                    </Card>
                </CardSection>
                <CardSection title="Hover Content">
                    <Card>
                        <Stack>
                            <Popover position={Position.BOTTOM_LEFT} interactionKind={PopperInteractionKind.HOVER}>
                                <span>Hover Content</span>
                                <div>Position.BOTTOM_LEFT</div>
                            </Popover>
                        </Stack>
                    </Card>
                </CardSection>
                <CardSection title="Hover & Click">
                    <Card>
                        <Stack>
                            <Popover position={Position.TOP_LEFT} interactionKind={PopperInteractionKind.CLICK}>
                                <span>Click</span>
                                <div>Position.TOP_LEFT</div>
                            </Popover>
                        </Stack>
                    </Card>
                </CardSection>
            </Card>
        )
    }
}
