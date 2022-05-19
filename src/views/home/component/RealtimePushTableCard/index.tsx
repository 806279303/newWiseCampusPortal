import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {RealtimePushTableItem} from "../../../../type/home/realtimePushTableCard/RealtimePushTableItem";
import {FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import {RealtimePushTableCardAction} from "../../../../type/home/realtimePushTableCard/RealtimePushTableCardAction";
import {loadData} from "../../../../redux/home/realtimePushTableCard/RealtimePushTableCardAction";

const RealtimePushTable = createTableClass<RealtimePushTableItem>()
type RealtimePushTableDescribe = LgSimpleTableDataDescribe<RealtimePushTableItem>


export interface RealtimePushTableCardProps {
  loading: boolean
  items: RealtimePushTableItem[]
  loadData(): void
}

export class RealtimePushTableCard extends BaseComponent<RealtimePushTableCardProps>{


  componentDidMount() {
    super.componentDidMount();
    this.props.loadData()
  }

  render() {
    return(
      <DataCard title="即时推送" className={this.rootClass()}>
        <RealtimePushTable
          dataArray={this.props.items}
          dataDescribe={this.getDataDescribe()}
          loading={this.props.loading}
        />
      </DataCard>
    )
  }

  private getDataDescribe() {
    const dataDescribe: RealtimePushTableDescribe[] = [
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
        field: "sysId",
        headName: "系统ID",
      },
      {
        field: "sysName",
        headName: "系统名称",
      },
      {
        field: "date",
        headName: "时间",
        width: "150px",
        color: "#999"
      },
    ]
    return dataDescribe;
  }

  getClassNamePrefix(): string {
    return "RealtimePushTableCard";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<RealtimePushTableCardProps>, RealtimePushTableCardProps, RootState> = (state) => {
  let realtimePushTableCardState = state.homeState.realtimePushTableCardState;
  return{
    ...realtimePushTableCardState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<RealtimePushTableCardProps>, RealtimePushTableCardProps> = (dispatch: Dispatch<RealtimePushTableCardAction>) => {
  return{
    ...bindActionCreators({loadData}, dispatch)
  }
}

export const RealtimePushTableCardComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(RealtimePushTableCard)