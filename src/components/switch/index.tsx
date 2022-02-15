import './index.scss'
import {BaseComponent} from "../../type/BaseComponent";
import classNames from "classnames";
import {BaseProps} from '../../type/BaseProps';
import {ReactNode} from "react";
import {LgLoading} from "@/components/loading";

export interface LgSwitchProps {
  checked?: boolean
  showLoading?: boolean
  disabled?: boolean
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
  size?: "large" | "small"
  "aria-label"?: string
  onClick?(checked: boolean): void
}


export class LgSwitch extends BaseComponent<LgSwitchProps> {

  private readonly classNamePrefix: string

  static defaultProps: LgSwitchProps = {
    checked: false,
    showLoading: false,
    disabled: false,
    checkedChildren: "",
    unCheckedChildren: "",
    size: "large",
    "aria-label": "",
    onClick: () => {
    }
  }

  constructor(props: (LgSwitchProps & BaseProps) | Readonly<LgSwitchProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-switch"
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    !this.props.showLoading && !this.props.disabled && this.props.onClick && this.props.onClick(!this.props.checked)
  }

  render() {

    let className = classNames(
      `${this.classNamePrefix}-root`,
      `${this.classNamePrefix}-${this.props.size}`,
      {
        [`${this.props.className}`]: !!this.props.className,
        [`${this.classNamePrefix}-checked`]: this.props.checked,
        [`${this.classNamePrefix}-unchecked`]: !this.props.checked,
        [`${this.classNamePrefix}-disabled`]: this.props.disabled,
        [`${this.classNamePrefix}-loading`]: this.props.showLoading
      }
    )

    let children;

    if (this.props.checked && this.props.checkedChildren) {
      children = this.props.checkedChildren
    } else if (!this.props.checked && this.props.unCheckedChildren) {
      children = this.props.unCheckedChildren
    }

    return (
      <div onClick={this.onClick} aria-label={this.props["aria-label"]} className={className} style={this.props.style}>
        <div className={`${this.classNamePrefix}-btn`}>
          {
            this.props.showLoading ?
              <LgLoading className={`${this.classNamePrefix}-loading`} type="B" showIcon tip=""/> : ""
          }
        </div>
        <div className={`${this.classNamePrefix}-children`}>{children}</div>
      </div>
    )
  }
}