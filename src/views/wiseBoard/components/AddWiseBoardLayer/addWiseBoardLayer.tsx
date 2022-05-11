import "./addWiseBoardLayer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";
import {LgPopLayer} from "@/components/popLayer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {bindActionCreators, Dispatch} from "redux";
import {Select} from "element-react";
import {ServiceType, serviceTypeOptions} from "../../../../type/wiseBoard/WiseBoardTableData";
import React, {FormEvent} from "react";
import {WxSchoolSimpleInfo} from "../../../../type/WxSchoolSimpleInfo";
import {fetchUnpurchasedSchoolSimpleInfos} from "../../../../redux/app/action";
import {CommonInput} from "@/components/CommonInput";
import {submitAddWiseBoardCall} from "../../../../redux/wiseBoard/addLayer/addLayerAction";
import {AddLayerActionType} from "../../../../type/wiseBoard/AddLayer/AddLayerActionType";
import {BaseProps} from "../../../../type/BaseProps";

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

  constructor(props: AddWiseBoardLayerProps & BaseProps) {
    super(props);
    this.handleBuyCallTimeChange = this.handleBuyCallTimeChange.bind(this)
  }

  componentDidMount() {
    super.componentDidMount();
    this.props.loadSchool()
  }

  UNSAFE_componentWillReceiveProps(nextProps: Readonly<AddWiseBoardLayerProps & BaseProps>, nextContext: any) {
    if(this.props.isOpen !== nextProps.isOpen && nextProps.isOpen){
      this.props.loadSchool()
    }
  }

  handleBuyCallTimeChange(e: FormEvent<HTMLInputElement>){
    let buyCallTime = 0
    if(e.currentTarget.value){
      buyCallTime = Number(e.currentTarget.value)
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
              <CommonInput value={this.props.buyCallTime === 0? "": this.props.buyCallTime.toString()} onInput={this.handleBuyCallTimeChange} inputFilter="numberOnly" className={this.class("number-input")} type="number" maxLength={9} min={1} max={10000000} />
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
    isOpen: state.wiseBoardState.addLayerState.showAddWiseBoardLayer,
    schoolInfos: state.appReducer.unpurchasedSchoolSimpleInfos,
    selectedSchoolId: state.wiseBoardState.addLayerState.addWiseBoardSchoolId,
    selectedServiceType: state.wiseBoardState.addLayerState.addWiseBoardServiceType,
    buyCallTime: state.wiseBoardState.addLayerState.addWiseBoardBuyCallTime
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<AddWiseBoardLayerProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    onClose: () => dispatch({type: AddLayerActionType.CLOSE_ADD_LAYER}),
    onChangeSchoolChange: (schoolId) => dispatch({type: AddLayerActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE, schoolId}),
    onServiceTypeChange: (serviceType) => dispatch({type: AddLayerActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE, serviceType: serviceType}),
    buyCallTimeChange: (buyCallTime) => dispatch({type: AddLayerActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE, buyCallTime}),
    ...bindActionCreators({loadSchool: fetchUnpurchasedSchoolSimpleInfos, onSubmit: submitAddWiseBoardCall}, dispatch)
  }
}

export const AddWiseBoardLayerComponent = connect(mapStateToProps, mapDispatchToProps)(AddWiseBoardLayer)