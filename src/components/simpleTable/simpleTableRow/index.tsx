import "./index.scss"
import {BaseComponent} from "../../../type/BaseComponent";

export interface SimpleTableRowProps {
}

export class SimpleTableRow extends BaseComponent<SimpleTableRowProps> {

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
    return "SimpleTableRow";
  }
}

