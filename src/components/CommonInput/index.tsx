import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import React, {KeyboardEvent} from "react";
import {BaseProps} from "../../type/BaseProps";

export interface CommonInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  inputFilter?: "" | "numberOnly" | "minusOnly" | string[]
}


export class CommonInput extends BaseComponent<CommonInputProps> {

  static defaultProps: Partial<CommonInputProps> = {
    inputFilter: ""
  }

  constructor(props: CommonInputProps & BaseProps) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  private handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    this.props.onKeyPress && this.props.onKeyPress(event)
    if (!this.props.inputFilter) {
      return
    }
    let invalidChars: string[] = []
    if (this.props.inputFilter === "numberOnly") {
      invalidChars = ['-', '+', 'e', '.', 'E']
    } else if (this.props.inputFilter === "minusOnly") {
      invalidChars = ['+', 'e', '.', 'E']
    } else {
      invalidChars = this.props.inputFilter
    }

    //限定字符
    if (invalidChars.indexOf(event.key) !== -1) {
      event.preventDefault()
    }
    //限定长度
    let targetInput: HTMLInputElement & { value: string } = event.target as any
    if (targetInput.value && this.props.maxLength && targetInput.value.length > this.props.maxLength - 1) {
      event.preventDefault()
    }
  }

  render() {
    const {inputFilter, className, onKeyPress, ...props} = this.props
    return (
      <input {...props} className={this.rootClass()} onKeyPress={this.handleKeyPress}/>
    )
  }

  getClassNamePrefix(): string {
    return "CommonInput";
  }
}

