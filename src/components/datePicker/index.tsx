import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {BaseProps} from "../../type/BaseProps";
import {DatePicker, DateRangePicker, TimeSelect} from "element-react"

export interface LgDatePickerProps extends DatePickerProps, TimeSelectProps{
  type?: "A" | "B" | "C" | "D"
}

export class LgDatePicker extends BaseComponent<LgDatePickerProps> {

  constructor(props: LgDatePickerProps & BaseProps, context: any) {
    super(props, context);
  }

  componentDidMount() {
    //避免默认行为
  }

  render() {

    switch (this.props.type){
      case "A":
        return <DatePicker ref={e => this.props.onRef && this.props.onRef(e)} {...(this.props as any)}/>
      case "B":
        return <DateRangePicker ref={e => this.props.onRef && this.props.onRef(e)} {...(this.props as any)}/>
      case "C":
        return <TimeSelect {...(this.props as any)} />
    }

    return <DatePicker ref={e => this.props.onRef && this.props.onRef(e)} {...(this.props as any)}/>
  }

  getClassNamePrefix(): string {
    return "LgDatePicker";
  }
}

type dateType = Date | string | null

interface DatePickerBaseProps {
  align?: 'left' | 'center' | 'right'
  format?: string
  isShowTrigger?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  placeholder?: string
  onFocus?(self?: any): void
  onBlur?(self?: any): void
  onChange?(value?: Date): void
  value?: dateType | dateType[]
}

interface DatePanelProps extends DatePickerBaseProps {
  value?: dateType | dateType[]
  onPick?: (date: any) => void
  isShowTime?: boolean
  showWeekNumber?: boolean
  format?: string
  shortcuts?: any[]
  selectionMode?: SelectionMode
  disabledDate?(date?: Date, type?: SelectionMode): boolean
  firstDayOfWeek?: number
  getPopperRefElement?: any
  popperMixinOption?: any
}

interface DatePickerProps extends DatePanelProps {
  value?: dateType | dateType[]
}

interface TimeSelectProps extends DatePickerBaseProps {
  start?: string
  end?: string
  step?: string
  minTime?: dateType
  maxTime?: dateType
  // value?: dateType
}