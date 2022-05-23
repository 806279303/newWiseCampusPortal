import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";
import {VisitsStatisticalItem} from "../../../../type/home/visitsStatistical/VisitsStatisticalItem";
import {FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../../../redux/rootReducer";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {bindActionCreators, Dispatch} from "redux";
import {VisitsStatisticalAction} from "../../../../type/home/visitsStatistical/VisitsStatisticalAction";
import {loadData} from "../../../../redux/home/visitsStatistical/VisitsStatisticalAction";
import {LgDatePicker} from "@/components/datePicker";

export interface VisitsStatisticalProps {
  items: VisitsStatisticalItem[]
  searchDate: Date
  loading: boolean
  loadData(searchDate: Date): void
}

export class VisitsStatistical extends BaseComponent<VisitsStatisticalProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData(new Date())
  }

  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.schoolName,
      num: item.visitedNumber
    }))
    return (
      <HistogramCard loading={this.props.loading}
                     action={this.renderAction()}
                     className={this.rootClass()}
                     title="学校访问量"
                     color={{start: "#9bce69", end: "#7bb73b"}}
                     fontColor="#7bb73b"
                     items={items}
      />
    )
  }

  renderAction() {
    return (
      <LgDatePicker isReadOnly={true} onChange={this.props.loadData} value={this.props.searchDate} selectionMode="month"/>
    )
  }

  getClassNamePrefix(): string {
    return "VisitsStatistical";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<VisitsStatisticalProps>, VisitsStatisticalProps, RootState> = (state) => {
  let visitsStatisticalState = state.homeState.visitsStatisticalState;
  return {
    ...visitsStatisticalState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<VisitsStatisticalProps>, any> = (dispatch: Dispatch<VisitsStatisticalAction>) => {
  return {
    ...bindActionCreators({loadData}, dispatch)
  }
}

export const VisitsStatisticalComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(VisitsStatistical)