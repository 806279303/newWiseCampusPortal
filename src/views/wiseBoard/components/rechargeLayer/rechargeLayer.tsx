import {BaseComponent} from "../../../../type/BaseComponent";
import {LgPopLayer} from "@/components/popLayer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import "./rechargeLayer.scss"
import {FunctionProperties, NonFunctionProperties} from "../../../../type/util";
import {RootState} from "../../../../redux/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import {WiseBoardAction} from "../../../../type/wiseBoard/WiseBoardAction";
import {RechargeLayerActionType} from "../../../../type/wiseBoard/rechargeLayer/rechargeLayerActionType";
import {FlexFillViewFrame} from "@/components/flexFillViewFrame";
import {WiseBoardTableData} from "../../../../type/wiseBoard/WiseBoardTableData";
import {CommonInput} from "@/components/CommonInput";
import {LgButton} from "@/components/button";
import {FormEvent} from "react";
import { BaseProps } from "../../../../type/BaseProps";
import {CommonTextarea} from "@/components/CommonTextarea";
import {recharge} from "../../../../redux/wiseBoard/rechargeLayer/rechargeLayerAction";

export interface RechargeLayerProps {
  isOpen: boolean

  onClose(): void

  rechargeSchool: WiseBoardTableData | null

  rechargeTime: number

  rechargeTimeChange(rechargeTime: number): void

  rechargeRemark: string
  rechargeRemarkChange(rechargeRemark: string): void

  onSubmit(): void
}

const quickInputs: { name: string, value: number }[] = [
  {
    name: "5万分钟",
    value: 50000
  },
  {
    name: "10万分钟",
    value: 100000
  },
  {
    name: "30万分钟",
    value: 300000
  },
  {
    name: "50万分钟",
    value: 500000
  },
]

export class RechargeLayer extends BaseComponent<RechargeLayerProps> {

  constructor(props: RechargeLayerProps & BaseProps) {
    super(props);
    this.handleQuickInput = this.handleQuickInput.bind(this)
    this.handleRechargeTimeChange = this.handleRechargeTimeChange.bind(this)
    this.handleRemarkInput = this.handleRemarkInput.bind(this)
  }


  render() {
    return (
      <LgPopLayer width={600} height={480} isShowBottom={false} title="充值" isOpen={this.props.isOpen}
                  onShowLayer={this.props.onClose} className={this.rootClass()}>
        <FlexFillViewFrame flexStart={this.renderTips()} orientation="vertical">
          {this.renderForm()}
        </FlexFillViewFrame>
      </LgPopLayer>
    )
  }

  renderTips() {
    return (
      <div className={this.class("tips")}>
        {this.renderSchoolInfo()}
        {this.renderRemainTime()}
      </div>
    )
  }

  renderSchoolInfo() {
    return (
      <div className={this.class("school-info")}>
        <div className={this.class("school-info-name")}>当前学校：</div>
        <div className={this.class("school-info-value")}>{this.props.rechargeSchool?.schoolName}</div>
      </div>
    )
  }

  renderRemainTime() {
    return (
      <div className={this.class("remain-time")}>
        <div className={this.class("remain-time-name")}>剩余时间：</div>
        <div className={this.class("remain-time-value")}>
          {this.props.rechargeSchool?.restCallTime}
          <div className={this.class("remain-time-value-subtitle")}>分钟</div>
        </div>
      </div>
    )
  }

  handleRechargeTimeChange(e: FormEvent<HTMLInputElement>){
    let newVal = 0
    if(e.currentTarget.value){
      newVal = Number(e.currentTarget.value)
    }

    if(newVal > 10000000){
      newVal = 10000000
    }
    this.props.rechargeTimeChange(newVal)
  }

  handleQuickInput(item: {name: string, value: number}){
    if(item.value !== this.props.rechargeTime){
      this.props.rechargeTimeChange(item.value)
    }
  }

  handleRemarkInput(e: FormEvent<HTMLTextAreaElement>){
    this.props.rechargeRemarkChange(e.currentTarget.value)
  }

  renderForm() {
    return (
      <div className={this.class("form")}>
        <div className={this.class("form-item")}>
          <div className={this.class("form-item-name")}>
            充值时长:
          </div>
          <div className={this.class("form-item-content")}>
            <CommonInput value={this.props.rechargeTime === 0? "" :this.props.rechargeTime.toString()} onInput={this.handleRechargeTimeChange} className={this.class("inner-input")} type="number" inputFilter="numberOnly" min={1} max={10000000} maxLength={9}/>
          </div>
          <div className={this.class("form-item-tail")}>分钟</div>
        </div>
        <div className={this.class("form-item")}>
          <div className={this.class("form-item-name")}/>
          <div className={this.class("form-item-content")}>
            <div className={this.class("quick-input-list")}>
              {
                quickInputs.map(item => <div key={item.value} onClick={() => this.handleQuickInput(item)} className={this.class("quick-input", {"selected": item.value === this.props.rechargeTime})}>{item.name}</div>)
              }
            </div>
          </div>
        </div>

        <div className={this.class("form-item")}>
          <div className={this.class("form-item-name")}>备注:</div>
          <div className={this.class("form-item-content")}>
            <CommonTextarea value={this.props.rechargeRemark} onInput={this.handleRemarkInput} maxLength={50} />
          </div>
        </div>
        <div className={this.class("form-operation")}>
          <LgButton
            className={this.class("submit-button")}
            onClick={this.props.onSubmit}
            value={"充值"}
            type="info"
            radius
            gradient
          />
        </div>
      </div>
    )
  }

  getClassNamePrefix(): string {
    return "RechargeLayer";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<RechargeLayerProps>, RechargeLayerProps, RootState> = (state) => {
  return {
    isOpen: state.wiseBoardState.rechargeLayerState.showRechargeLayer,
    rechargeSchool: state.wiseBoardState.rechargeLayerState.rechargeSchool,
    rechargeTime: state.wiseBoardState.rechargeLayerState.rechargeTime,
    rechargeRemark: state.wiseBoardState.rechargeLayerState.rechargeRemark
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<RechargeLayerProps>, any> = (dispatch: Dispatch<WiseBoardAction>) => {
  return {
    onClose: () => dispatch({type: RechargeLayerActionType.CLOSE_RECHARGE_LAYER}),
    rechargeTimeChange: (rechargeTime) => dispatch({type: RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_TIME_CHANGE, rechargeTime}),
    rechargeRemarkChange: (rechargeRemark) => dispatch({type: RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_REMARK_CHANGE, rechargeRemark}),
    ...bindActionCreators({onSubmit: recharge}, dispatch)
  }
}

export const RechargeLayerComponent = connect(mapStateToProps, mapDispatchToProps)(RechargeLayer)