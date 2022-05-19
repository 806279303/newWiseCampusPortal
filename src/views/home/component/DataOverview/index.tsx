import "./index.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {LgDatePicker} from "@/components/datePicker";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {Component, FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {bindActionCreators, Dispatch} from "redux";
import {DataOverviewAction} from "../../../../type/home/dataOverview/DataOverviewAction";
import {loadData} from "../../../../redux/home/dataOverview/DataOverviewAction";
import dayjs from "dayjs";
import {LgLoading} from "@/components/loading";

export interface DataOverviewProps {
  searchDate: Date
  loginNumber: number
  pushNumber: number
  exceptionNumber: number
  loading: boolean

  loadData(searchDate: Date): void
}

export class DataOverview extends BaseComponent<DataOverviewProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData(new Date())
  }

  render() {
    return (
      <DataCard title="数据总览" className={this.rootClass()} action={this.renderAction()}>

        <div className={this.class("data-overview-container")}>
          {
            this.props.loading ?
              <div className={this.class("loading")}>
                <LgLoading/>
              </div> :
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
          }
          <div className={this.class("footer-tips")}>当前筛选时间：{dayjs(this.props.searchDate).format("YYYY-MM")}</div>
        </div>
      </DataCard>
    )
  }

  renderAction() {
    return (
      <LgDatePicker isReadOnly={true} onChange={this.props.loadData} value={this.props.searchDate} selectionMode="month"/>
    )
  }

  getClassNamePrefix(): string {
    return "DataOverview";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<DataOverviewProps>, DataOverviewProps, RootState> = (state) => {
  let dataOverviewState = state.homeState.dataOverviewState;
  return {
    ...dataOverviewState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<DataOverviewProps>, any> = (dispatch: Dispatch<DataOverviewAction>) => {
  return {
    ...bindActionCreators({loadData}, dispatch)
  }
}


export const DataOverviewComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(DataOverview)
