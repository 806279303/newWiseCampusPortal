import "./index.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {LgDatePicker} from "@/components/datePicker";

export interface DataOverviewProps {
  loginNumber: number
  pushNumber: number
  exceptionNumber: number
}

export class DataOverview extends BaseComponent<DataOverviewProps> {

  render() {
    return (
      <DataCard title="数据总览" className={this.rootClass()} action={this.renderAction()}>
        <div className={this.class("data-overview-container")}>
          <div className={this.class("list-data")}>
            <div className={this.class("data-item", "login-number")}>
              <div className={this.class("number-container")}>{this.props.loginNumber}</div>
              <div className={this.class("tips")}>登陆数</div>
            </div>
            <div className={this.class("data-item", "message-push-number")}>
              <div className={this.class("number-container")}>{this.props.pushNumber}</div>
              <div className={this.class("tips")}>消息推送数</div>
            </div>
            <div className={this.class("data-item", "exception-number")}>
              <div className={this.class("number-container")}>{this.props.exceptionNumber}</div>
              <div className={this.class("tips")}>异常总数</div>
            </div>
          </div>
          <div className={this.class("footer-tips")}>当前筛选时间：2022-05</div>
        </div>
      </DataCard>
    )
  }

  renderAction(){
    return (
      <LgDatePicker value={new Date("2022-01")} selectionMode="month"/>
    )
  }

  getClassNamePrefix(): string {
    return "DataOverview";
  }
}

