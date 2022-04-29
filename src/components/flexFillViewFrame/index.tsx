import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {ReactNode} from "react";
import { FlexFillView } from "../flexFillView";

export interface FlexFillViewFrameProps {
  flexStart?: ReactNode
  flexEnd?: ReactNode
  orientation?: "horizontal" | "vertical"
  flexFillViewClassName?: string
}

export class FlexFillViewFrame extends BaseComponent<FlexFillViewFrameProps> {

  static defaultProps: Partial<FlexFillViewFrameProps> = {
    orientation: "horizontal"
  }

  render() {

    return (
      <div className={this.rootClass(this.props.orientation)}>
        {
          this.props.flexStart
        }
        <FlexFillView className={this.props.flexFillViewClassName}>
          {
            this.props.children
          }
        </FlexFillView>
        {
          this.props.flexEnd
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "FlexFillViewFrame";
  }
}

