import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";


export interface LgLoadingProps {
  type?: "A" | "B" | "C" | "D"
}

export const LgLoading = (props: LgLoadingProps) => {
  switch (props.type) {
    case "A":
      return <LgLoadingA {...props} />
    case "B":
      return <></>
    case "C":
      return <></>
    case "D":
      return <></>
  }

  return <LgLoadingA {...props} />
}


export interface LgLoadingAProps {
  tip?: string
  size?: "medium" | "large"
}

export class LgLoadingA extends BaseComponent<LgLoadingAProps> {
  static defaultProps: LgLoadingAProps = {
    size: "large",
    tip: "加载中..."
  }

  render() {
    return (
      <div className={`lg-loading-a-root lg-loading-size-${this.props.size} ${this.props.className || ""}`}>
        <div className={`lg-loading-anime `}
             style={this.props.style}>
          <div className="lg-loading-dot-top"/>
          <div className="lg-loading-dot-right"/>
          <div className="lg-loading-dot-bottom"/>
          <div className="lg-loading-dot-left"/>
        </div>
        <div className="lg-loading-tip">{this.props.tip}</div>
      </div>
    )
  }
}