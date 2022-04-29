import "./index.scss"
import {BaseComponent} from "../../../type/BaseComponent";

export interface SimpleTableHeaderProps {
}

interface SimpleTableHeaderState {
}

export class SimpleTableHeader extends BaseComponent<SimpleTableHeaderProps, SimpleTableHeaderState> {

  render() {
    return (
      <div className={this.rootClass()}>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTableHeader";
  }
}

