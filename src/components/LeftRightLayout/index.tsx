import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {ReactNode} from "react";

export interface LeftRightLayoutProps {
  leftChildren?: ReactNode
  rightChildren?: ReactNode
}

export class LeftRightLayout extends BaseComponent<LeftRightLayoutProps> {

  render() {
    return (
      <div className={this.rootClass()}>
        <div className={this.class("left")}>
          {
            this.props.leftChildren
          }
        </div>
        <div>
          {
            this.props.rightChildren
          }
        </div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "LeftRightLayout";
  }
}

