import { Component } from "react";
import "./index.scss";
import { AllSkinCover } from "../AllSkinCover";
import { LgMenu } from "@/components/menu";
import { CodeView } from "@/components/CodeView";
export default class Menu extends Component<{}, {}> {
  render() {

    return (
      <div className="lg_tabs_container">
        <h2>Menu导航菜单</h2>
        <div className="lg_tabs_item">
          <div className="lg_tabs_item_title">标签属性</div>
          <CodeView language="html" className="lg_tabs_block">
            {`
              type menuIndex = string;
              interface MenuProps{
                  defaultActive?: menuIndex
                  defaultOpeneds?: menuIndex[]
                  uniqueOpened?: boolean
                  menuTrigger?: string
                  onSelect?(index?: menuIndex, indexPath?: menuIndex[]): void
                  onOpen?(index?: menuIndex, indexPath?: menuIndex[]): void
                  onClose?(index?: menuIndex, indexPath?: menuIndex[]): void
              };
              interface SubMenuProps {
                  index: menuIndex
                  title?: React.ReactElement<any> | string
              };
              interface MenuItemGroupProps {
                  title: string
              };
              interface MenuItemProps {
                  index: menuIndex
                  disabled?: boolean
              }
          `}
          </CodeView>
        </div>
        <div className="lg_tabs_item">
          <div className="lg_tabs_item_title">顶栏</div>
          <div className="lg_tabs_item_des">适用广泛的基础用法。</div>
          <div className="lg_tabs_item_cont">
            <LgMenu defaultActive="1">
              <LgMenu.LgItem index="1">处理中心</LgMenu.LgItem>
              <LgMenu.LgSubMenu index="2" title="我的工作台">
                <LgMenu.LgItem index="2-1">选项1</LgMenu.LgItem>
                <LgMenu.LgItem index="2-2">选项2</LgMenu.LgItem>
                <LgMenu.LgItem index="2-3">选项3</LgMenu.LgItem>
              </LgMenu.LgSubMenu>
              <LgMenu.LgItem index="3">订单管理</LgMenu.LgItem>
            </LgMenu>
          </div>
          <CodeView language="html" className="lg_tabs_block">
            {`
              <LgMenu defaultActive="1">
                <LgMenu.LgItem index="1">处理中心</LgMenu.LgItem>
                <LgMenu.LgSubMenu index="2" title="我的工作台">
                  <LgMenu.LgItem index="2-1">选项1</LgMenu.LgItem>
                  <LgMenu.LgItem index="2-2">选项2</LgMenu.LgItem>
                  <LgMenu.LgItem index="2-3">选项3</LgMenu.LgItem>
                </LgMenu.LgSubMenu>
                <LgMenu.LgItem index="3">订单管理</LgMenu.LgItem>
              </LgMenu>
            `}
          </CodeView>
        </div>
        <div className="lg_tabs_item">
          <div className="lg_tabs_item_title">侧栏</div>
          <div className="lg_tabs_item_des">垂直菜单，可内嵌子菜单。</div>
          <div className="lg_tabs_item_cont lg_tabs_item_cont_flex clear">
            <div className="lg_menu_b">
              <div className="lg_menu_b_title">带icon</div>
              <LgMenu type="B" defaultActive="2">
                <LgMenu.LgSubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                  <LgMenu.LgItemGroup title="分组一">
                    <LgMenu.LgItem index="1-1">选项1</LgMenu.LgItem>
                    <LgMenu.LgItem index="1-2">选项2</LgMenu.LgItem>
                  </LgMenu.LgItemGroup>
                  <LgMenu.LgItemGroup title="分组2">
                    <LgMenu.LgItem index="1-3">选项3</LgMenu.LgItem>
                  </LgMenu.LgItemGroup>
                </LgMenu.LgSubMenu>
                <LgMenu.LgItem index="2"><i className="el-icon-Lgmenu"></i>导航二</LgMenu.LgItem>
                <LgMenu.LgItem index="3"><i className="el-icon-setting"></i>导航三</LgMenu.LgItem>
              </LgMenu>
            </div>
            <div className="lg_menu_b">
              <div className="lg_menu_b_title">不带icon</div>
              <LgMenu type="B" defaultActive="2">
                <LgMenu.LgSubMenu index="1" title="导航一">
                  <LgMenu.LgItemGroup title="分组一">
                    <LgMenu.LgItem index="1-1">选项1</LgMenu.LgItem>
                    <LgMenu.LgItem index="1-2">选项2</LgMenu.LgItem>
                  </LgMenu.LgItemGroup>
                  <LgMenu.LgItemGroup title="分组2">
                    <LgMenu.LgItem index="1-3">选项3</LgMenu.LgItem>
                  </LgMenu.LgItemGroup>
                </LgMenu.LgSubMenu>
                <LgMenu.LgItem index="2">导航二</LgMenu.LgItem>
                <LgMenu.LgItem index="3">导航三</LgMenu.LgItem>
              </LgMenu>
            </div>
            <div className="lg_menu_b">
              <div className="lg_menu_b_title">分组</div>
              <LgMenu type="B" defaultActive="1">
                <LgMenu.LgItemGroup title="分组一">
                  <LgMenu.LgItem index="1"><i className="el-icon-message"></i>导航一</LgMenu.LgItem>
                  <LgMenu.LgItem index="2"><i className="el-icon-message"></i>导航二</LgMenu.LgItem>
                </LgMenu.LgItemGroup>
                <LgMenu.LgItemGroup title="分组二">
                  <LgMenu.LgItem index="3"><i className="el-icon-message"></i>导航三</LgMenu.LgItem>
                  <LgMenu.LgItem index="4"><i className="el-icon-message"></i>导航四</LgMenu.LgItem>
                </LgMenu.LgItemGroup>
              </LgMenu>
            </div>
          </div>
          <CodeView language="html" className="lg_tabs_block">
            {`
{/* 带icon */}          
<div className="lg_menu_b">
  <div className="lg_menu_b_title">带icon</div>
  <LgMenu type="B" defaultActive="2">
    <LgMenu.LgSubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
      <LgMenu.LgItemGroup title="分组一">
        <LgMenu.LgItem index="1-1">选项1</LgMenu.LgItem>
        <LgMenu.LgItem index="1-2">选项2</LgMenu.LgItem>
      </LgMenu.LgItemGroup>
      <LgMenu.LgItemGroup title="分组2">
        <LgMenu.LgItem index="1-3">选项3</LgMenu.LgItem>
      </LgMenu.LgItemGroup>
    </LgMenu.LgSubMenu>
    <LgMenu.LgItem index="2"><i className="el-icon-Lgmenu"></i>导航二</LgMenu.LgItem>
    <LgMenu.LgItem index="3"><i className="el-icon-setting"></i>导航三</LgMenu.LgItem>
  </LgMenu>
</div>
{/* 不带icon */}   
<div className="lg_menu_b">
  <div className="lg_menu_b_title">不带icon</div>
  <LgMenu type="B" defaultActive="2">
    <LgMenu.LgSubMenu index="1" title="导航一">
      <LgMenu.LgItemGroup title="分组一">
        <LgMenu.LgItem index="1-1">选项1</LgMenu.LgItem>
        <LgMenu.LgItem index="1-2">选项2</LgMenu.LgItem>
      </LgMenu.LgItemGroup>
      <LgMenu.LgItemGroup title="分组2">
        <LgMenu.LgItem index="1-3">选项3</LgMenu.LgItem>
      </LgMenu.LgItemGroup>
    </LgMenu.LgSubMenu>
    <LgMenu.LgItem index="2">导航二</LgMenu.LgItem>
    <LgMenu.LgItem index="3">导航三</LgMenu.LgItem>
  </LgMenu>
</div>
{/* 分组 */}
<div className="lg_menu_b">
  <div className="lg_menu_b_title">分组</div>
  <LgMenu type="B" defaultActive="1">
    <LgMenu.LgItemGroup title="分组一">
      <LgMenu.LgItem index="1"><i className="el-icon-message"></i>导航一</LgMenu.LgItem>
      <LgMenu.LgItem index="2"><i className="el-icon-message"></i>导航二</LgMenu.LgItem>
    </LgMenu.LgItemGroup>
    <LgMenu.LgItemGroup title="分组二">
      <LgMenu.LgItem index="3"><i className="el-icon-message"></i>导航三</LgMenu.LgItem>
      <LgMenu.LgItem index="4"><i className="el-icon-message"></i>导航四</LgMenu.LgItem>
    </LgMenu.LgItemGroup>
  </LgMenu>
</div>
            `}
          </CodeView>
        </div>
      </div>
    )
  }
}
