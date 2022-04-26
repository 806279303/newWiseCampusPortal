import {BaseComponent} from "../../../../type/BaseComponent";
import {Select, Upload} from "element-react";
import "./header.scss"

export interface HeaderProps {
}

interface HeaderState {
}

export class Header extends BaseComponent<HeaderProps, HeaderState> {

  render() {
    return (
      <div className={this.rootClass()}>
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
        <div className={this.class("right")}>

        </div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "Header";
  }
}

