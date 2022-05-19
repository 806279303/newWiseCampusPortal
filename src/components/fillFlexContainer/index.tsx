import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"

export class FillFlexContainer extends BaseComponent{


  render() {
    return(
      <div className={this.rootClass()}>
        {
          this.props.children
        }
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "FillFlexContainer";
  }
}