import React, {Component} from 'react';
import { LgTabs } from "@/components/tabs";

import './index.scss'
class Index extends Component {
    render() {
        return (
            <div className="tabs-root">
                <LgTabs
                    type="card"
                    closable
                    activeName="1"
                    onTabRemove={(tab: any) => console.log(tab.props.name)}
                >
                    <LgTabs.LgPane label="用户管理" name="1"></LgTabs.LgPane>
                    <LgTabs.LgPane label="配置管理" name="2"></LgTabs.LgPane>
                    <LgTabs.LgPane label="角色管理" name="3"></LgTabs.LgPane>
                    <LgTabs.LgPane label="定时补偿任务" name="4"></LgTabs.LgPane>
                </LgTabs>
            </div>
        );
    }
}

export default Index;