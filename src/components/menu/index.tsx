import "./index.scss"
import { Component } from "react";
import { BaseProps } from '../../type/BaseProps'

import { Layout, Menu } from "element-react";

interface IFMenu extends BaseProps {
    type: "A" | "B" | undefined,

}
class LgItem extends Component{

}
export class LgMenu extends Component<IFMenu, {}> {
    
    static lgItem = LgItem

    constructor(props: IFMenu) {
        super(props)
    }
    onSelect() {
        
    }
    onOpen() {

    }
    onClose() {

    }
    render() {
        const { className = '', style = {}, type = "A" } = this.props
        return (
            <div className={`lg_menu_root ${className}`} style={style}>
            <input type="file" name="a" onChange={e=>{console.log(e)}}></input>
                {
                    type == 'A' ? (
                        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                            <Menu.Item index="1">处理中心</Menu.Item>
                            <Menu.SubMenu index="2" title="我的工作台">
                                <Menu.Item index="2-1">选项1</Menu.Item>
                                <Menu.Item index="2-2">选项2</Menu.Item>
                                <Menu.Item index="2-3">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item index="3">订单管理</Menu.Item>
                        </Menu>
                    ) : (
                        <Menu defaultActive="2" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                            <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                                <Menu.ItemGroup title="分组一">
                                    <Menu.Item index="1-1">选项1</Menu.Item>
                                    <Menu.Item index="1-2">选项2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="分组2">
                                    <Menu.Item index="1-3">选项3</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.SubMenu>
                            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
                            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
                        </Menu>
                    )
                }

                {/* <Menu defaultActive="2" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)}>
                    <Menu.SubMenu index="1" title="导航一">
                        <Menu.ItemGroup title="分组一">
                            <Menu.Item index="1-1">选项1</Menu.Item>
                            <Menu.Item index="1-2">选项2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="分组2">
                            <Menu.Item index="1-3">选项3</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.SubMenu>
                    <Menu.Item index="2">导航二</Menu.Item>
                    <Menu.Item index="3">导航三</Menu.Item>
                </Menu>
 
                <Menu mode="vertical" defaultActive="1">
                    <Menu.ItemGroup title="分组一">
                        <Menu.Item index="1"><i className="el-icon-message"></i>导航一</Menu.Item>
                        <Menu.Item index="2"><i className="el-icon-message"></i>导航二</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="分组二">
                        <Menu.Item index="3"><i className="el-icon-message"></i>导航三</Menu.Item>
                        <Menu.Item index="4"><i className="el-icon-message"></i>导航四</Menu.Item>
                    </Menu.ItemGroup>
                </Menu> */}
            </div>
        )
    }
}