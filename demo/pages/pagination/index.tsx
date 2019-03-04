import * as React from 'react'
import {Stack} from "../../components/stack/stack";
import {Card, CardSection} from "../../components/card/card";
import {Pagination, Toaster, TypeKind} from '../../../src';

export default class PaginationDemo extends React.Component {
    public static readonly displayName = 'PaginationDemo'

    public state = {
        pageNum: 2,
        totalRecords: 400
    }

    public toaster: Toaster

    public refHandlers = {
        toaster: (ref: Toaster) => {
            this.toaster = ref
        }
    }

    public onChange = (page) => {
        this.setState({
            pageNum: page
        }, () => {
            this.toaster.show({
                message: `点击了: ${page}`,
                showDismissButton: true,
                type: TypeKind.INFO,
            })
        })
    }

    public render() {
        return (
            <Card title="Pagination 组件">
                <CardSection title="示例">
                    <Card>
                        <Stack>
                            <Toaster ref={this.refHandlers.toaster} />
                            <Pagination totalRecords={this.state.totalRecords} pageNum={this.state.pageNum} onChange={this.onChange}/>
                        </Stack>
                    </Card>
                </CardSection>

            </Card>
        )
    }
}
