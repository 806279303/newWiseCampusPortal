import { Component } from "react";
import "./index.scss";
import { AllSkinCover } from "../AllSkinCover";
import { Icon, Button } from "element-react";
import { LgTabs } from "@/components/tabs";

interface IState {
    tabs: any
    tabIndex: any
    tabs1: any
    tabIndex1: any
}
export default class Menu extends Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            tabs: [{
                title: 'Tab 1',
                name: 'Tab 1',
                content: 'Tab 1 content',
            }, {
                title: 'Tab 2',
                name: 'Tab 2',
                content: 'Tab 2 content',
            }],
            tabIndex: 2,

            tabs1: [{
                title: 'Tab 1',
                name: 'Tab 1',
                content: 'Tab 1 content',
            }, {
                title: 'Tab 2',
                name: 'Tab 2',
                content: 'Tab 2 content',
            }],
            tabIndex1: 2,
        }
    }
    editTab(action: any, tab: any) {
        if (action === 'add') {
            const tabs = this.state.tabs;
            const tabIndex = this.state.tabIndex;
            const index = tabIndex + 1;

            tabs.push({
                title: 'new Tab',
                name: 'Tab ' + index,
                content: 'new Tab content',
            });
            this.setState({
                tabs,
                tabIndex: index,
            });
        }

        if (action === 'remove') {
            const { tabs } = this.state;

            console.log(action, tab);
            tabs.splice(tab.key.replace(/^\.\$/, ''), 1);
            this.setState({
                tabs,
            });
        }
    }

    addTab() {
        const { tabs1, tabIndex1 } = this.state;
        const index = tabIndex1 + 1;

        tabs1.push({
            title: 'new Tab',
            name: 'Tab ' + index,
            content: 'new Tab content',
        });
        this.setState({
            tabs1,
            tabIndex1: index,
        });
    }

    removeTab(tab: any) {
        const { tabs1, tabIndex } = this.state;

        tabs1.splice(tab.key.replace(/^\.\$/, ''), 1);
        this.setState({
            tabs1,
        });
    }
    render() {
        const label = <span><Icon name="date" /> 用户管理</span>
        return (
            <AllSkinCover className="lg_tabs_block">
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">基础样式</div>
                    <div className="lg_tabs_item_des">基础的、简洁的标签页。</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs activeName="2" onTabClick={(tab) => console.log(tab.props.name)}>
                            <LgTabs.LgPane label="用户管理" name="1">用户管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="配置管理" name="2">配置管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="角色管理" name="3">角色管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="定时补偿任务" name="4">定时补偿任务</LgTabs.LgPane>
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">选项卡样式</div>
                    <div className="lg_tabs_item_des">选项卡样式的标签页。</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs type="card" value="1">
                            <LgTabs.LgPane label="用户管理" name="1">用户管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="配置管理" name="2">配置管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="角色管理" name="3">角色管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="定时补偿任务" name="4">定时补偿任务</LgTabs.LgPane>
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">可关闭</div>
                    <div className="lg_tabs_item_des">可以关闭标签页。</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs type="card" closable activeName="1" onTabRemove={(tab: any) => console.log(tab.props.name)}>
                            <LgTabs.LgPane label="用户管理" name="1">用户管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="配置管理" name="2">配置管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="角色管理" name="3">角色管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="定时补偿任务" name="4">定时补偿任务</LgTabs.LgPane>
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">卡片化</div>
                    <div className="lg_tabs_item_des">卡片化的标签页。</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs type="border-card" activeName="1">
                            <LgTabs.LgPane label="用户管理" name="1">用户管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="配置管理" name="2">配置管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="角色管理" name="3">角色管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="定时补偿任务" name="4">定时补偿任务</LgTabs.LgPane>
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">自定义标签页</div>
                    <div className="lg_tabs_item_des">可以通过 node 类型来实现自定义标签页的内容。</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs type="border-card" activeName="1">
                            <LgTabs.LgPane label={label} name="1">用户管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="配置管理" name="2">配置管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="角色管理" name="3">角色管理</LgTabs.LgPane>
                            <LgTabs.LgPane label="定时补偿任务" name="4">定时补偿任务</LgTabs.LgPane>
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">动态增减标签页</div>
                    <div className="lg_tabs_item_des">增减标签页按钮只能在选项卡样式的标签页下使用</div>
                    <div className="lg_tabs_item_cont">
                        <LgTabs type="card" value="Tab 2" editable onTabEdit={(action, tab) => this.editTab(action, tab)}>
                            {
                                this.state.tabs.map((item: any, index: any) => {
                                    return <LgTabs.LgPane key={index} closable label={item.title} name={item.name}>{item.content}</LgTabs.LgPane>
                                })
                            }
                        </LgTabs>
                    </div>
                </div>
                <div className="lg_tabs_item">
                    <div className="lg_tabs_item_title">动态添加标签页</div>
                    <div className="lg_tabs_item_cont">
                        <div style={{ marginBottom: '20px' }}>
                            <Button size="small" onClick={() => this.addTab()}>add tab</Button>
                        </div>
                        <LgTabs type="card" value="Tab 2" onTabRemove={(tab) => this.removeTab(tab)}>
                            {
                                this.state.tabs1.map((item: any, index: any) => {
                                    return <LgTabs.LgPane key={index} closable label={item.title} name={item.name}>{item.content}</LgTabs.LgPane>
                                })
                            }
                        </LgTabs>
                    </div>
                </div>
            </AllSkinCover>
        )
    }
}
