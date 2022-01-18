import "./index.scss"
import { Component } from "react";
import { BaseProps } from '../../type/BaseProps';

import { Menu, Tabs } from "element-react";
import { BaseComponent } from "../../type/BaseComponent";


interface TabsProps {
    type?: 'card' | 'border-card'
    activeName?: string
    value?: string
    closable?: boolean
    addable?: boolean
    editable?: boolean
    // TODO: add tab type
    onTabClick?(tab?: any): void
    onTabRemove?(name?: string): void
    onTabAdd?(): void
    onTabEdit?(targetName?: string, action?: string): void
}
interface TabsPaneProps{
    label?: string | React.ReactElement<any>
    name?: string
    disabled?: boolean
    closable?: boolean
}
export class LgPaneClass extends BaseComponent<TabsPaneProps, {}>{
    render() {
        return (
            <Tabs.Pane {...this.props}>
                {
                    this.props.children
                }
            </Tabs.Pane>
        )
    }
}
export class LgTabs extends BaseComponent<TabsProps> {

    static readonly LgPane = LgPaneClass


    constructor(props: TabsProps) {
        super(props)
    }

    onSelect() {
    }
    onOpen() {

    }
    onClose() {

    }

    componentDidMount(): void {
        super.componentDidMount()
    }
    render() {
        const { className = '', style } = this.props
        return (
            <div className={`lg_tabs_root ${className}`} style={style}>
                <Tabs {...this.props}>
                    {
                        this.props.children
                    }
                </Tabs>
            </div>
        )
    }
}