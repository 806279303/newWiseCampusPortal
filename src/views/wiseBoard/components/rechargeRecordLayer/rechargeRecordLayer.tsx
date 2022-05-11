import "./rechargeRecordLayer.scss"
import {BaseComponent} from "../../../../type/BaseComponent";

export interface RechargeRecordLayerProps {
}

interface RechargeRecordLayerState {
}

export class RechargeRecordLayer extends BaseComponent<RechargeRecordLayerProps, RechargeRecordLayerState> {

  render() {
    return (
      <div className={this.rootClass()}>

      </div>
    )
  }

  getClassNamePrefix(): string {
    return "RechargeRecordLayer";
  }
}

