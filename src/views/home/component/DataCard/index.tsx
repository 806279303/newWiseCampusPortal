import "./index.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {ReactNode} from "react";

export interface DataCardProps {
  title?: string
  action?: ReactNode
}

export class DataCard extends BaseComponent<DataCardProps> {

  render() {
    return (
      <div className={this.rootClass()}>
        <div className={this.class("header")}>
          <div className={this.class("title")}>
            {this.props.title}
          </div>
          <div className={this.class("action")}>
            {this.props.action}
          </div>
        </div>
        <div className={this.class("body")}>
          {
            this.props.children
          }
        </div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "DataCard";
  }
}

