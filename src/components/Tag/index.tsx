import {BaseComponent} from "../../type/BaseComponent";
import classNames from "classnames";
import {BaseProps} from "../../type/BaseProps";
import "./index.scss"
import {SvgIcon} from "./img";

export interface LgTagCommonProps{
  onClick?(): void
  children?: string
}

export interface LgTagProps extends LgTagAProps, LgTagBProps, LgTagCProps, LgTabDProps{
  type?: "A" | "B" | "C" | "D"
}

export const LgTag = (props: BaseProps & LgTagProps) => {

  switch (props.type){
    case "A":
      return <LgTagA {...props} />
    case "B":
      return <LgTagB {...props} />
    case "C":
      return <LgTagC {...props} />
    case "D":
      return <LgTagD {...props} />
  }

  return(
    <LgTagA {...props} />
  )
}


export interface LgTagAProps extends LgTagCommonProps{
}

export class LgTagA extends BaseComponent<LgTagAProps>{

  private readonly classNamePrefix: string

  static defaultProps: LgTagAProps = {
  }

  constructor(props: (LgTagAProps & BaseProps) | Readonly<LgTagAProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-tag-a"
  }

  render() {

    let tagClassNames = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )

    return(
      <span onClick={this.props.onClick} className={tagClassNames} style={this.props.style}>
        {
          this.props.children
        }
      </span>
    )
  }
}

export interface LgTagBProps extends LgTagCommonProps{
  tagBColorType?: "primary" | "success" | "warning" | "disabled"
  baseSize?: number
}

export class LgTagB extends BaseComponent<LgTagBProps>{

  private readonly classNamePrefix: string

  static defaultProps: LgTagBProps = {
    tagBColorType: "primary",
    baseSize: 64
  }


  constructor(props: (LgTagBProps & BaseProps) | Readonly<LgTagBProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-tag-b"
  }

  render(){
    let className = classNames(
      `${this.classNamePrefix}-root`,
        {
          [`${this.props.className}`]: !!this.props.className
        }
      )
    let tagBColorType = this.props.tagBColorType || "primary"
    let Icon = SvgIcon.side[tagBColorType]

    let baseSize = this.props.baseSize || 0

    let height = baseSize * (24 / 64)
    let width = baseSize + 10
    let fontSize = baseSize * (14 / 64)

    return(
      <span onClick={this.props.onClick} className={className} style={{...this.props.style, height: `${height}px`, width: `${width}px`}}>
        <Icon className={`${this.classNamePrefix}-icon`} />
        <span className={`${this.classNamePrefix}-text`} style={{fontSize: `${fontSize}px`}}>{this.props.children}</span>
      </span>
    )
  }
}


const TagCFontColorMap = {
  "inProgress": "#c1e6c1",
  "notStart": "#bde5ff",
  "undone": "#ffcfc3",
  "withdrawn": "#dddddd",
  "delay": "#ffc5c5",
}

export interface LgTagCProps extends LgTagCommonProps{
  tagCColorType?: "inProgress" | "notStart" | "undone" | "withdrawn" | "delay"
  baseSize?: number
}

export class LgTagC extends BaseComponent<LgTagCProps>{

  private readonly classNamePrefix: string

  static defaultProps: LgTagCProps = {
    tagCColorType: "inProgress",
    baseSize: 100
  }

  constructor(props: (LgTagCProps & BaseProps) | Readonly<LgTagCProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-tag-c"
  }

  render(){
    let className = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )
    let tagCColorType = this.props.tagCColorType || "inProgress"
    let Icon = SvgIcon.seal[tagCColorType]

    let baseSize = this.props.baseSize || 0

    let height = baseSize
    let width = baseSize
    let fontSize = baseSize * (14 / 100)
    if(fontSize < 12){
      fontSize = 12
    }
    let text:string = this.props.children? this.props.children.toString(): ""

    text = text.trim()
    text = text.length <= 4? text: text.substring(0, 4) + "..."

    let tagCFontColor = this.props.tagCColorType || "inProgress"

    return(
      <span onClick={this.props.onClick} className={className} style={{...this.props.style, height: `${height}px`, width: `${width}px`}}>
        <Icon className={`${this.classNamePrefix}-icon`} />
        <span className={`${this.classNamePrefix}-text`} style={{fontSize: `${fontSize}px`, color: TagCFontColorMap[tagCFontColor]}}>{text}</span>
      </span>
    )
  }
}


export interface LgTabDProps extends LgTagCommonProps{
  tagDColorType?: "primary" | "success" | "warning" | "disabled"
  baseSize?: number
}

export class LgTagD extends BaseComponent<LgTabDProps>{

  private readonly classNamePrefix: string

  static defaultProps: LgTabDProps = {
    tagDColorType: "primary",
    baseSize: 84
  }

  constructor(props: (LgTabDProps & BaseProps) | Readonly<LgTabDProps & BaseProps>) {
    super(props);
    this.classNamePrefix = "lg-tag-d"
  }

  render(){
    let className = classNames(
      `${this.classNamePrefix}-root`,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )
    let tagDColorType = this.props.tagDColorType || "primary"
    let Icon = SvgIcon.corner[tagDColorType]

    let baseSize = this.props.baseSize || 0

    let height = baseSize
    let width = baseSize * (83 / 84)
    let fontSize = baseSize * (14 / 84)
    if(fontSize < 12){
      fontSize = 12
    }
    let top = baseSize * (20 / 84)

    let text:string = this.props.children? this.props.children.toString(): ""

    text = text.trim()
    text = text.length <= 4? text: text.substring(0, 4) + "..."

    return(
      <span onClick={this.props.onClick} className={className} style={{...this.props.style, height: `${height}px`, width: `${width}px`}}>
        <Icon className={`${this.classNamePrefix}-icon`} />
        <span className={`${this.classNamePrefix}-text`} style={{fontSize: `${fontSize}px`, top: `${top}px`}}>{text}</span>
      </span>
    )
  }
}
