import * as React from 'react'
import * as ReactDom from 'react-dom'

import './index.scss'

import ButtonDemo from "./pages/button";
import CollapseDemo from "./pages/collapse";
import {Stack} from "./components/stack/stack";
import DialogDemo from "./pages/dialog";
import TreeDemo from "./pages/tree";
import SliderDemo from "./pages/slider";
import TabsDemo from "./pages/tabs";
import ControlDemo from "./pages/control";
import {Popover} from "../src/components/popover/popover";
import {Position} from "../src/common/position";

class Demo extends React.Component {
    public render() {
        return (
            <div className="demo">
                <Stack>
                    暂时只支持 PC 端！！
                </Stack>
                <Stack vertical={true}>
                    <ButtonDemo/>
                    <CollapseDemo />
                    <DialogDemo />
                    <TreeDemo />
                    <SliderDemo />
                    <TabsDemo />
                    <ControlDemo />
                    <Popover position={Position.BOTTOM}>
                        <span>help</span>
                        <div>Popover...</div>
                    </Popover>
                </Stack>
            </div>
        )
    }
}

ReactDom.render(<Demo/>, document.getElementById('app'))
