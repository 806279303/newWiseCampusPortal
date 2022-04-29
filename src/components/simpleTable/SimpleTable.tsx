import "./SimpleTable.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {SimpleTableHeader} from "@/components/simpleTable/simpleTableHeader";
import {SimpleTableBody} from "@/components/simpleTable/simpleTableBody";

export interface SimpleTableProps {
}

export class SimpleTable extends BaseComponent<SimpleTableProps> {

  public static Head = SimpleTableHeader

  public static Body = SimpleTableBody

  render() {
    return (
      <div className={
        this.rootClass()
      }>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "SimpleTable";
  }
}

