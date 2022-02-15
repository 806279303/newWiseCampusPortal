import {BaseComponent} from "../../type/BaseComponent";
import {BaseProps} from "../../type/BaseProps";
import classNames from "classnames";
import "./index.scss"
import {ReactNode} from "react";
import {EmptyIcon1, EmptyIcon2} from "./img";


export interface LgEmptyProps {
  tip?: string
  icon?: "icon-1" | "icon-2" | ReactNode
}

export class LgEmpty extends BaseComponent<LgEmptyProps> {

  private readonly classNamePrefix: string

  static defaultProps: LgEmptyProps = {
    tip: "暂无数据",
    icon: "icon-1"
  }

  constructor(props: (LgEmptyProps & BaseProps) | Readonly<LgEmptyProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-empty"
  }

  render() {

    let icon
    switch (this.props.icon){
      case "icon-1":
        icon = <EmptyIcon1 />
        break
      case "icon-2":
        icon = <EmptyIcon2 />
        break
      default:
        icon = this.props.icon
    }

    let className = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className,
        [`${this.classNamePrefix}-icon-1`]: this.props.icon == "icon-1",
        [`${this.classNamePrefix}-icon-2`]: this.props.icon == "icon-2"
      }
    )

    return (
      <div className={className}>
        <div className={`${this.classNamePrefix}-icon`}>
          {
            icon
          }
        </div>
        <div className={`${this.classNamePrefix}-tip`}>{this.props.tip}</div>
      </div>
    );
  }
}