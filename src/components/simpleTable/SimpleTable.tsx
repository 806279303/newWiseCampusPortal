import "./SimpleTable.scss"
import {BaseComponent} from "../../type/BaseComponent";

export interface SimpleTableProps {
}

export class SimpleTable extends BaseComponent<SimpleTableProps> {

  render() {
    return (
      <div className={this.rootClass()}>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTable";
  }
}

