import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {BaseProps} from "../../type/BaseProps";
// import {DatePicker} from "element-react"

export interface LgDatePickerProps {

}

export class LgDatePicker extends BaseComponent<LgDatePickerProps>{

  constructor(props: LgDatePickerProps & BaseProps) {
    super(props);
  }

  componentDidMount() {
    super.componentDidMount();
  }

  render() {
    return(
      <div>
        {/*<DatePicker />*/}
      </div>
    )
  }
}