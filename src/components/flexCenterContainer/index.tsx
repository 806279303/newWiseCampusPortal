import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";

export interface FlexCenterContainerProps {
}


export class FlexCenterContainer extends BaseComponent<FlexCenterContainerProps> {
  render() {
    return (
      <div className={this.rootClass()}>
        {
          this.props.children
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "FlexCenterContainer";
  }
}

