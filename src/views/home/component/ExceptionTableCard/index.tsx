import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import "./index.scss"
import {ExceptionTableItem} from "../../../../type/home/exceptionTableCard/ExceptionTableItem";
import {FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {ExceptionTableCardAction} from "../../../../type/home/exceptionTableCard/ExceptionTableCardAction";
import {bindActionCreators, Dispatch} from "redux";
import {loadData} from "../../../../redux/home/exceptionTableCard/ExceptionTableCardAction";

const ExceptionTable = createTableClass<ExceptionTableItem>();
type ExceptionTableDescribe = LgSimpleTableDataDescribe<ExceptionTableItem>

export interface ExceptionTableCardProps {
  loading: boolean
  items: ExceptionTableItem[]
  loadData(): void
}

export class ExceptionTableCard extends BaseComponent<ExceptionTableCardProps>{

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData()
  }

  render() {
    return(
      <DataCard title="实时异常" className={this.rootClass()}>
        <ExceptionTable
          dataArray={this.props.items}
          dataDescribe={this.getDataDescribe()}
          loading={this.props.loading}
        />
      </DataCard>
    )
  }

  private getDataDescribe() {
    const dataDescribe: ExceptionTableDescribe[] = [
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
        field: "exceptionPath",
        headName: "异常路径",
      },
      {
        field: "exceptionPath",
        headName: "IP",
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
    return "ExceptionTableCard";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<ExceptionTableCardProps>, ExceptionTableCardProps, RootState> = (state) => {
  let exceptionTableCardState = state.homeState.exceptionTableCardState;
  return{
    ...exceptionTableCardState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<ExceptionTableCardProps>, ExceptionTableCardProps> = (dispatch: Dispatch<ExceptionTableCardAction>) => {
  return{
    ...bindActionCreators({loadData}, dispatch)
  }
}

export const ExceptionTableCardComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(ExceptionTableCard)