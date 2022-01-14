import { Component } from "react";
import "./index.scss";
import { AllSkinCover } from "../AllSkinCover";
import { LgMenu } from "@/components/menu";

export default class Menu extends Component<{}, {}> {
  render() {
    return (
      <div className="lg-menu-demo">
        {/* <AllSkinCover> */}
        <h3>顶栏</h3>
        <LgMenu type="A"></LgMenu>
        <h3>侧栏</h3>
        <div className="lg_menu_b">
          <LgMenu type="B"></LgMenu>
        </div>
        <div className="lg_menu_b">
          <LgMenu type="B"></LgMenu>
        </div>
        <div className="lg_menu_b">
          <LgMenu type="B"></LgMenu>
        </div>
        {/* </AllSkinCover> */}
      </div>
    )
  }
}