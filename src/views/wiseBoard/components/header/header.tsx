import {BaseComponent} from "../../../../type/BaseComponent";
import {Select} from "element-react";
import "./header.scss"
import {LeftRightLayout} from "@/components/LeftRightLayout";
import {AddBtn} from "@/components/common";
import React from "react";
import {Search} from "@/components/search";

export interface WiseBoardHeaderProps {
}

export class WiseBoardHeader extends BaseComponent<WiseBoardHeaderProps> {

  render() {
    return (
      <LeftRightLayout className={this.rootClass()} leftChildren={this.renderLeft()}
                       rightChildren={this.renderRight()}/>
    )
  }

  private renderLeft() {
    return (
      <div className={this.class("left")}>
        <Select value="123">
          <Select.Option label={"123"} value={"123"}/>
          <Select.Option label={"456"} value={"456"}/>
          <Select.Option label={"789"} value={"789"}/>
        </Select>
        <div className={this.class("left-tip")}>
          当前<span className={this.class("left-tip-total-school")}>624</span>个学校使用
        </div>
      </div>
    );
  }

  private renderRight() {
    return (
      <div className={this.class("right")}>
        <Search className={this.class("search")} placeholder="搜索相关信息" value=""/>
        <AddBtn text="添加音视频通话"/>
      </div>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoardHeader";
  }
}

