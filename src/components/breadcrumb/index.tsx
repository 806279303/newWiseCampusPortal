import "./index.scss"
import {Component, CSSProperties} from "react";


export interface LgBreadcrumbProps {
  type: "A" | "B"
  className?: string
  style?: CSSProperties
  itemList: string[]
}

export class LgBreadcrumb extends Component<LgBreadcrumbProps, {}> {


  render() {
    return (
      <div className={`lg-breadcrumb-root ${this.props.className || ""}`} style={this.props.style}>
        <div className="lg-breadcrumb-title">
          <div className="lg-breadcrumb-title-wrapper">
            <div className="lg-breadcrumb-title-text">最新课程</div>
          </div>
        </div>
        <div className={`lg-breadcrumb-container`}>
          {
            this.props.itemList.length ? this.props.itemList.map(item => <div
              className="lg-breadcrumb-item">{item}</div>) : ''
          }
        </div>
      </div>
    )
  }

}