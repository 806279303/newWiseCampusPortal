import {BaseComponent} from "../../../../type/BaseComponent";
import {Select} from "element-react";
import "./header.scss"
import {LeftRightLayout} from "@/components/LeftRightLayout";
import {AddBtn} from "@/components/common";
import React from "react";
import {Search} from "@/components/search";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../../../redux/rootReducer";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {bindActionCreators, Dispatch} from "redux";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {onSelectedServiceTypeChange, wiseBoardSearchAction} from "../../../../redux/wiseBoard/action";
import {ServiceType, serviceTypeOptions} from "../../../../type/wiseBoard/WiseBoardTableData";
import {WiseBoardListActionType} from "../../../../type/wiseBoard/wiseBoardList/WiseBoardListActionType";
import {AddLayerActionType} from "../../../../type/wiseBoard/AddLayer/AddLayerActionType";
import { BaseProps } from "../../../../type/BaseProps";

export interface WiseBoardHeaderProps {
  selectedServiceType: ServiceType

  onSelectedServiceTypeChange(serviceType: ServiceType): void

  searchWord: string

  searchWordChange(schoolName: string): void

  search(): void

  total: number

  openAddLayer(): void
}


export class WiseBoardHeader extends BaseComponent<WiseBoardHeaderProps> {

  constructor(props: WiseBoardHeaderProps & BaseProps) {
    super(props);
    this.handleServiceTypeChange = this.handleServiceTypeChange.bind(this)
  }


  render() {
    return (
      <LeftRightLayout className={this.rootClass()} leftChildren={this.renderLeft()}
                       rightChildren={this.renderRight()}/>
    )
  }

  handleServiceTypeChange(value: ServiceType){
    if(value !== this.props.selectedServiceType){
      this.props.onSelectedServiceTypeChange(value)
    }
  }

  private renderLeft() {
    return (
      <div className={this.class("left")}>
        <Select value={this.props.selectedServiceType} onChange={this.handleServiceTypeChange}>
          {
            serviceTypeOptions.filter(item => item.value !== ServiceType.NOT_PURCHASED && item.value !== ServiceType.EXCEED).map(item => <Select.Option key={item.value} label={item.name} value={item.value}/>)
          }
        </Select>
        <div className={this.class("left-tip")}>
          当前<span className={this.class("left-tip-total-school")}>{this.props.total}</span>个学校
        </div>
      </div>
    );
  }

  private renderRight() {
    return (
      <div className={this.class("right")}>
        <Search onSearch={this.props.search} onChange={this.props.searchWordChange}
                onClear={() => this.props.searchWordChange("")} className={this.class("search")} placeholder="请输入学校名称"
                value={this.props.searchWord}/>
        <AddBtn handClick={this.props.openAddLayer} text="添加音视频通话"/>
      </div>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoardHeader";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<WiseBoardHeaderProps>, any, RootState> = (state) => {
  return {
    searchWord: state.wiseBoardState.listState.searchSchoolName,
    selectedServiceType: state.wiseBoardState.listState.serviceType,
    total: state.wiseBoardState.listState.total
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<WiseBoardHeaderProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    searchWordChange: (word) => dispatch({type: WiseBoardListActionType.CHANGE_SEARCH_SCHOOL_NAME, searchSchoolName: word}),
    openAddLayer: () => {
      dispatch({type: AddLayerActionType.CLEAR_ADD_LAYER})
      dispatch({type: AddLayerActionType.OPEN_ADD_LAYER})
    },
    ...bindActionCreators({search: wiseBoardSearchAction, onSelectedServiceTypeChange}, dispatch)
  }
}

export const WiseBoardHeaderComponent = connect(mapStateToProps, mapDispatchToProps)(WiseBoardHeader)