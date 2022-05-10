import "./addWiseBoardLayer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {LgPopLayer} from "@/components/popLayer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {bindActionCreators, Dispatch} from "redux";
import {WiseBoardActionType} from "../../../../type/wiseBoard/WiseBoardActionType";
import {Select} from "element-react";
import {ServiceType, serviceTypeOptions} from "../../../../type/wiseBoard/WiseBoardTableData";
import React, {FormEvent} from "react";
import {WxSchoolSimpleInfo} from "../../../../type/WxSchoolSimpleInfo";
import {fetchSchoolSimpleInfo} from "../../../../redux/app/action";
import {CommonInput} from "@/components/CommonInput";
import {submitAddWiseBoardCall} from "../../../../redux/wiseBoard/action";

export interface AddWiseBoardLayerProps {
  isOpen: boolean
  schoolInfos: WxSchoolSimpleInfo[]
  selectedSchoolId: number
  onChangeSchoolChange(schoolId: number): void
  onClose(): void
  loadSchool(): void
  selectedServiceType: ServiceType
  onServiceTypeChange(serviceType: ServiceType): void
  buyCallTime: number
  buyCallTimeChange(buyCallTime: number): void
  onSubmit(): void
}

export class AddWiseBoardLayer extends BaseComponent<AddWiseBoardLayerProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadSchool()
    this.handleBuyCallTimeChange = this.handleBuyCallTimeChange.bind(this)
  }

  handleBuyCallTimeChange(e: FormEvent<HTMLInputElement>){
    let buyCallTime = 0
    if(e.currentTarget.value){
      buyCallTime = Number(e.currentTarget.value)
    }
    if(buyCallTime < 1){
      buyCallTime = 1
    }
    if(buyCallTime > 10000000){
      buyCallTime = 10000000
    }
    this.props.buyCallTimeChange(buyCallTime)
  }

  render() {
    return (
      <LgPopLayer width={480} height={280} isOpen={this.props.isOpen} className={this.rootClass()} title="添加音视频通话"
                  onShowLayer={this.props.onClose} onConfirm={this.props.onSubmit}>
        <div className={this.class("form")}>
          <div className={this.class("form-item")}>
            <div className={this.class("form-item-tips")}>学校：</div>
            <div className={this.class("form-item-content")}>
              <Select className={this.class("school-select")} value={this.props.selectedSchoolId} onChange={this.props.onChangeSchoolChange}>
                {this.props.schoolInfos.map(item => <Select.Option key={item.id} label={item.schoolName}
                                                                   value={item.id}/>)}
              </Select>
            </div>
          </div>

          <div className={this.class("form-item")}>
            <div className={this.class("form-item-tips")}>购买时长：</div>
            <div className={this.class("form-item-content")}>
              <CommonInput value={this.props.buyCallTime.toString()} onInput={this.handleBuyCallTimeChange} inputFilter="numberOnly" className={this.class("number-input")} type="number" maxLength={9} min={1000} max={10000000} />
            </div>
            <div className={this.class("form-item-tail")}>分钟</div>
          </div>

          <div className={this.class("form-item")}>
            <div className={this.class("form-item-tips")}>服务类型：</div>
            <div className={this.class("form-item-content")}>
              <Select className={this.class("service-type")} value={this.props.selectedServiceType} onChange={this.props.onServiceTypeChange}>
                {
                  serviceTypeOptions.filter(item => item.value === ServiceType.TRIAL || item.value === ServiceType.PURCHASED).map(item =>
                    <Select.Option key={item.value} label={item.name} value={item.value}/>
                  )
                }
              </Select>
            </div>
          </div>
        </div>
      </LgPopLayer>
    )
  }

  getClassNamePrefix(): string {
    return "AddWiseBoardLayer";
  }
}


const mapStateToProps: MapStateToProps<NonFunctionProperties<AddWiseBoardLayerProps>, any, RootState> = (state) => {
  return {
    isOpen: state.wiseBoardReducer.showAddWiseBoardLayer,
    schoolInfos: state.appReducer.schoolSimpleInfos,
    selectedSchoolId: state.wiseBoardReducer.addWiseBoardSchoolId,
    selectedServiceType: state.wiseBoardReducer.addWiseBoardServiceType,
    buyCallTime: state.wiseBoardReducer.addWiseBoardBuyCallTime
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<AddWiseBoardLayerProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    onClose: () => dispatch({type: WiseBoardActionType.CLOSE_ADD_LAYER}),
    onChangeSchoolChange: (schoolId) => dispatch({type: WiseBoardActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE, schoolId}),
    onServiceTypeChange: (serviceType) => dispatch({type: WiseBoardActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE, serviceType: serviceType}),
    buyCallTimeChange: (buyCallTime) => dispatch({type: WiseBoardActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE, buyCallTime}),
    ...bindActionCreators({loadSchool: fetchSchoolSimpleInfo, onSubmit: submitAddWiseBoardCall}, dispatch)
  }
}

export const AddWiseBoardLayerComponent = connect(mapStateToProps, mapDispatchToProps)(AddWiseBoardLayer)