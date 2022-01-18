import { Component } from "react";
import "./index.scss";
import { AllSkinCover } from "../AllSkinCover";
import { LgMenu } from "@/components/menu";

export default class Menu extends Component<{}, {}> {
  render() {

    return (
      <AllSkinCover>
        <div className="lg_menu_b">
          <LgMenu type="B" defaultActive="1">
            <LgMenu.LgSubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
              <LgMenu.LgItem index="1-1">选项1</LgMenu.LgItem>
              <LgMenu.LgItemGroup title="分组2">
                <LgMenu.LgItem index="1-3">选项3</LgMenu.LgItem>
              </LgMenu.LgItemGroup>
            </LgMenu.LgSubMenu>
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
      </AllSkinCover>
    ) 
  }
}
