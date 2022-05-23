import "./body.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {WiseBoardTable, WiseBoardTableDataDescribe} from "@/views/wiseBoard/type";
import {ServiceType, serviceTypeOptionMap, WiseBoardTableData} from "../../../../type/wiseBoard/WiseBoardTableData";
import {ReactNode} from "react";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import {fetchWiseBoardListAction} from "../../../../redux/wiseBoard/action";
import {BaseProps} from "../../../../type/BaseProps";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {RechargeLayerActionType} from "../../../../type/wiseBoard/rechargeLayer/rechargeLayerActionType";
import {RechargeRecordActionType} from "../../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordActionType";

export interface WiseBoardBodyProps {
  loading: boolean
  dataArray: WiseBoardTableData[]

  fetchWiseBoardListAction(page: number): void

  showRechargeLayer(data: WiseBoardTableData): void

  showRechargeRecordLayer(data: WiseBoardTableData): void
}

export class WiseBoardBody extends BaseComponent<WiseBoardBodyProps> {

  constructor(props: WiseBoardBodyProps & BaseProps) {
    super(props);
    this.renderOperation = this.renderOperation.bind(this)
  }

  componentDidMount() {
    super.componentDidMount();
    this.props.fetchWiseBoardListAction(1)
  }

  private getDataDescribe() {
    const dataDescribe: WiseBoardTableDataDescribe[] = [
      {
        isId: true,
        field: "schoolId",
        headName: "学校ID",
      },
      {
        field: "schoolName",
        headName: "学校名称",
      },
      {
        field: "usedCallTime",
        headName: "已使用总时长(分钟)",
        color: "#999"
      },
      {
        field: "restCallTime",
        headName: "剩余通话时长（分钟）",
      },
      {
        field: "serviceType",
        headName: "状态",
        render: (data: WiseBoardTableData) =>  {
          return (
            <WiseBoardTable.Column className={this.class("service-type", {
              "service-type-trial": data.serviceType === ServiceType.TRIAL,
              "service-type-purchased": data.serviceType === ServiceType.PURCHASED,
            })} key={"serviceType"}>
              {
                serviceTypeOptionMap.get(data.serviceType)
              }
            </WiseBoardTable.Column>
          )
        }
      },
      {
        field: "createTime",
        headName: "创建时间",
        color: "#999"
      },
      {
        field: "",
        headName: "操作",
        render: this.renderOperation
      }
    ]
    return dataDescribe;
  }

  renderOperation(data: WiseBoardTableData): ReactNode {
    return (
      <WiseBoardTable.Column key={"operation"}>
        <div className={this.class("operation")}>
          <div className={this.class("recharge")} onClick={() => this.props.showRechargeLayer(data)}>充值</div>
          <div className={this.class("split")}/>
          <div className={this.class("recharge-record")} onClick={() => this.props.showRechargeRecordLayer(data)}>充值记录
          </div>
        </div>
      </WiseBoardTable.Column>
    )
  }

  render() {
    return (
      <WiseBoardTable className={this.rootClass()} dataDescribe={this.getDataDescribe()}
                      dataArray={this.props.dataArray}
                      loading={this.props.loading}/>
    )
  }

  getClassNamePrefix(): string {
    return "WiseBoardBody";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<WiseBoardBodyProps>, WiseBoardBodyProps, RootState> = (state) => {
  return {
    loading: state.wiseBoardState.listState.loading,
    dataArray: state.wiseBoardState.listState.tableData
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<WiseBoardBodyProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    showRechargeLayer: (data) => {
      dispatch({type: RechargeLayerActionType.CLEAR_RECHARGE_LAYER})
      dispatch({type: RechargeLayerActionType.OPEN_RECHARGE_LAYER, rechargeSchool: data})
    },
    showRechargeRecordLayer: (data) => dispatch({type: RechargeRecordActionType.OPEN_LAYER, querySchool: data}),
    ...bindActionCreators({fetchWiseBoardListAction}, dispatch)
  }
}

export const WiseBoardBodyComponent = connect(mapStateToProps, mapDispatchToProps)(WiseBoardBody);
