import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {FlexFillViewFrame} from "../flexFillViewFrame"
import {ReactNode} from "react";

export interface MainContentViewProps {
  header?: ReactNode
  headerClassName?: string
  footer?: ReactNode
  footerClassName?: string
  bodyClassName?: string
}

export class MainContentView extends BaseComponent<MainContentViewProps> {

  render() {
    return (
      <div className={this.rootClass()}>
        <FlexFillViewFrame flexFillViewClassName={this.props.bodyClassName} flexStart={this.renderHeader()} flexEnd={this.renderFooter()} orientation="vertical">
          {
            this.props.children
          }
        </FlexFillViewFrame>
      </div>
    )
  }

  renderHeader() {
    if(!this.props.header){
      return ""
    }

    return (
      <div className={this.class("header")}>
        {
          this.props.header
        }
      </div>
    )
  }

  renderFooter() {
    if(!this.props.footer){
      return ""
    }
    return (
      <div className={this.class("footer")}>
        {
          this.props.footer
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "MainContentView";
  }
}

