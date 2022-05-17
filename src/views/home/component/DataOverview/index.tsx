import "./index.scss"
import {BaseComponent} from "../../../../type/BaseComponent";

export interface DataOverviewProps {
}

export class DataOverview extends BaseComponent<DataOverviewProps> {

  render() {
    return (
      <div className={this.rootClass()}>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "DataOverview";
  }
}

