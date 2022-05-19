import {BaseComponent} from "../../../../type/BaseComponent";
import {HistogramCard, HistogramCardItem} from "@/views/home/component/HistogramCard";
import {MiniProgramStatisticalItem} from "../../../../type/home/miniProgramStatistical/MiniProgramStatisticalItem";
import {FC} from "react";
import {BaseProps} from "../../../../type/BaseProps";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {LgDatePicker} from "@/components/datePicker";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {bindActionCreators} from "redux";
import {loadData} from "../../../../redux/home/miniProgramStatistical/MiniProgramStatisticalAction";

export interface MiniProgramStatisticalProps {
  searchDate: Date
  items: MiniProgramStatisticalItem[]
  loading: boolean

  loadData(searchDate: Date): void
}

export class MiniProgramStatistical extends BaseComponent<MiniProgramStatisticalProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData(new Date())
  }

  render() {
    const items: HistogramCardItem[] = this.props.items.map(item => ({
      name: item.miniProgramName,
      num: item.num
    }))
    return (
      <HistogramCard loading={this.props.loading}
                     action={this.renderAction()}
                     className={this.rootClass()}
                     title="使用最多的小程序"
                     color={{start: "#ffd183", end: "#ff9500"}}
                     fontColor="#ff9602"
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
    return "MiniProgramStatistical";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<MiniProgramStatisticalProps>, MiniProgramStatisticalProps, RootState> = (state) => {
  let miniProgramStatisticalState = state.homeState.miniProgramStatisticalState;
  return{
    ...miniProgramStatisticalState
  }
}


const mapDispatchToProps: MapDispatchToProps<FunctionProperties<MiniProgramStatisticalProps>, any> = (dispatch) => {
  return{
    ...bindActionCreators({loadData}, dispatch)
  }
}

export const MiniProgramStatisticalComponent: FC<BaseProps> = connect(mapStateToProps, mapDispatchToProps)(MiniProgramStatistical)