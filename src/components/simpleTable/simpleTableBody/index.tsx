import "./index.scss"
import {BaseComponent} from "../../../type/BaseComponent";

export interface SimpleTableBodyProps {
}

interface SimpleTableBodyState {
}

export class SimpleTableBody extends BaseComponent<SimpleTableBodyProps, SimpleTableBodyState> {

  render() {
    return (
      <div className={this.rootClass()}>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTableBody";
  }
}

