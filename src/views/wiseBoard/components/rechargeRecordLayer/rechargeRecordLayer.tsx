import "./rechargeRecordLayer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {LgPopLayer} from "@/components/popLayer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {FlexFillViewFrame} from "@/components/flexFillViewFrame";
import {WiseBoardTableData} from "../../../../type/wiseBoard/WiseBoardTableData";
import {RechargeRecordResult} from "../../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordResult";
import {bindActionCreators, Dispatch} from "redux";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {RechargeRecordActionType} from "../../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordActionType";
import {RechargeRecordTable, RechargeRecordTableDescribe} from "@/views/wiseBoard/type";
import {fetchRechargeRecord} from "../../../../redux/wiseBoard/rechargeRecordLayer/rechargeRecordAction";
import {BaseProps} from "../../../../type/BaseProps";
import Pagination from "@/components/pagination";

export interface RechargeRecordLayerProps {
  showLayer: boolean

  onClose(): void

  querySchool: WiseBoardTableData | null
  recordResult: RechargeRecordResult | null
  loading: boolean
  currentPage: number

  fetchRechargeRecord(page?: number): void
}

export class RechargeRecordLayer extends BaseComponent<RechargeRecordLayerProps> {
  constructor(props: RechargeRecordLayerProps & BaseProps) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this)
  }


  UNSAFE_componentWillReceiveProps(nextProps: Readonly<RechargeRecordLayerProps & BaseProps>, nextContext: any) {
    if (this.props.showLayer !== nextProps.showLayer && nextProps.showLayer) {
      this.props.fetchRechargeRecord(1)
    }
  }

  render() {
    return (
      <LgPopLayer title={`充值记录-${this.props.querySchool?.schoolName}`} width={1000} height={640}
                  isOpen={this.props.showLayer} onShowLayer={this.props.onClose} className={this.rootClass()}
                  isShowBottom={false}>
        <FlexFillViewFrame flexStart={this.renderTips()} flexEnd={this.renderPaging()} orientation="vertical">
          {this.renderTable()}
        </FlexFillViewFrame>
      </LgPopLayer>
    )
  }

  renderTips() {
    return (
      <div className={this.class("tips")}>
        共
        <div className={this.class("tips-count")}>{this.props.recordResult?.total || 0}条</div>
        充值记录
      </div>
    )
  }

  renderTable() {
    return (
      <div className={this.class("table")}>
        <RechargeRecordTable dataDescribe={this.getDataDescribe()}
                             dataArray={this.props.recordResult?.list}
                             loading={this.props.loading}/>
      </div>
    )
  }

  renderPaging() {
    return (
      <div className={this.class("footer")}>
        <Pagination totalPage={this.props.recordResult?.pages || 0} currentPage={this.props.currentPage}
                    onClick={this.onPageChange}/>
      </div>
    )
  }

  onPageChange(index: number) {
    this.props.fetchRechargeRecord(index)
  }

  private getDataDescribe() {
    const dataDescribe: RechargeRecordTableDescribe[] = [
      {
        field: "createTime",
        headName: "充值时间",
        isId: true
      },
      {
        field: "lastRestTime",
        headName: "充值剩余时长",
      },
      {
        field: "addCallTime",
        headName: "充值时长"
      },
      {
        field: "remark",
        headName: "备注"
      }
    ]
    return dataDescribe;
  }

  getClassNamePrefix(): string {
    return "RechargeRecordLayer";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<RechargeRecordLayerProps>, any, RootState> = (state) => {
  return {
    ...state.wiseBoardState.rechargeRecordLayerState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<RechargeRecordLayerProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    onClose: () => dispatch({type: RechargeRecordActionType.CLOSE_LAYER}),
    ...bindActionCreators({fetchRechargeRecord}, dispatch)
  }
}


export const RechargeRecordLayerComponent = connect(mapStateToProps, mapDispatchToProps)(RechargeRecordLayer)

