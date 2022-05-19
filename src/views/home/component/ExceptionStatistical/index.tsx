import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";
import {LgDatePicker} from "@/components/datePicker";
import {ExceptionStatisticalItem} from "../../../../type/home/exceptionStatistical/ExceptionStatisticalItem";
import {FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import {ExceptionStatisticalAction} from "../../../../type/home/exceptionStatistical/ExceptionStatisticalAction";
import {loadData} from "../../../../redux/home/exceptionStatistical/ExceptionStatisticalAction";

export interface ExceptionStatisticalProps {
  items: ExceptionStatisticalItem[]
  searchDate: Date
  loading: boolean
  loadData(searchDate: Date): void
}

export class ExceptionStatistical extends BaseComponent<ExceptionStatisticalProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData(new Date())
  }

  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.schoolName,
      num: item.num
    }))
    return (
      <HistogramCard loading={this.props.loading} action={this.renderAction()} fontColor='#1da4fe' color={{start: '#1da4fe', end: '#7ecbff'}} className={this.rootClass()} title="学校异常统计" items={items}/>
    )
  }

  renderAction() {
    return (
      <LgDatePicker isReadOnly={true} onChange={this.props.loadData} value={this.props.searchDate} selectionMode="month"/>
    )
  }

  getClassNamePrefix(): string {
    return "ExceptionStatistical";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<ExceptionStatisticalProps>, ExceptionStatisticalProps, RootState> = (state) => {
  let exceptionStatisticalState = state.homeState.exceptionStatisticalState;
  return {
    ...exceptionStatisticalState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<ExceptionStatisticalProps>, any> = (dispatch: Dispatch<ExceptionStatisticalAction>) => {
  return{
    ...bindActionCreators({loadData}, dispatch)
  }
}


export const ExceptionStatisticalComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(ExceptionStatistical)