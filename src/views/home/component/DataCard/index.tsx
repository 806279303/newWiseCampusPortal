import "./index.scss"
import {BaseComponent} from "../../../../type/BaseComponent";

export interface DataCardProps {

}

export class DataCard extends BaseComponent<DataCardProps> {

  render() {
    return (
      <div className={this.rootClass()}>
        <div className={this.class("header")}></div>
        <div className={this.class("body")}></div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "DataCard";
  }
}

