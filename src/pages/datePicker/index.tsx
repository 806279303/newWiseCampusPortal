import {Component} from "react";
import {LgDatePicker} from "@/components/datePicker";
import "./index.scss"
import {allSkinClassName} from "@/components/index";


export default class DatePicker extends Component{

  private currentSkinIndex: number;

  constructor(props: {}) {
    super(props);
    this.changeSkin = this.changeSkin.bind(this)
    this.currentSkinIndex = 0
    document.body.className = allSkinClassName[this.currentSkinIndex]
  }

  changeSkin(){
    this.currentSkinIndex = (this.currentSkinIndex + 1) % allSkinClassName.length
    document.body.className = allSkinClassName[this.currentSkinIndex]
  }

  render() {
    return (
      <div className="lg-date-picker-demo">
        <div onClick={this.changeSkin} className="change-skin">点击切换皮肤</div>
        <div className="lg-date-picker-demo-a">
          <div className="label">A款单日选择</div>
          <LgDatePicker/>
        </div>
      </div>
    )
  }
}