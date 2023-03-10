import "./index.scss"
import {BaseComponent} from "../../../type/BaseComponent";
import {CSSProperties} from "react";

export interface SimpleTableColumnProps {
  width?: string
  color?: string
}

export class SimpleTableColumn extends BaseComponent<SimpleTableColumnProps> {

  render() {
    const style:CSSProperties = {}
    if(this.props.width){
      style.width = this.props.width
      style.flex = "none"
    }

    if(this.props.color){
      style.color = this.props.color
    }

    let title = ""
    if(typeof this.props.children === "string"){
      title = this.props.children
    }

    return (
      <div className={this.rootClass()} style={style} title={title}>
        {
          this.props.children
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTableColumn";
  }
}