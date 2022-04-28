import { BaseComponent } from "../../type/BaseComponent"
import "./index.scss"

export interface FlexFillViewProps {
}

export class FlexFillView extends BaseComponent<FlexFillViewProps> {

  render() {
    return (
      <div className={this.rootClass()}>
        <div className={this.class("body")}>
          {
            this.props.children
          }
        </div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "FlexFillView";
  }
}

