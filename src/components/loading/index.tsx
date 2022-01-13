import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";


export interface LgLoadingProps extends LgLoadingAProps, LgLoadingBProps {
  type?: "A" | "B" | "C" | "D"
}

export const LgLoading = (props: LgLoadingProps) => {
  switch (props.type) {
    case "A":
      return <LgLoadingA {...props} />
    case "B":
      return <LgLoadingB {...props} />
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
  tipAlign?: "bottom" | "right"
}

export class LgLoadingA extends BaseComponent<LgLoadingAProps> {
  static defaultProps: LgLoadingAProps = {
    size: "large",
    tip: "加载中...",
    tipAlign: "bottom"
  }

  render() {
    return (
      <div
        className={`lg-loading-a-root lg-loading-tip-align-${this.props.tipAlign} lg-loading-size-${this.props.size} ${this.props.className || ""}`}>
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

export interface LgLoadingBProps {
  tip?: string
  showIcon?: boolean
  animeType?: "A" | "B"
}


let loadingId = 0


export class LgLoadingB extends BaseComponent<LgLoadingBProps> {

  private readonly currentId: number


  constructor(props: LgLoadingBProps & BaseComponent) {
    super(props);
    this.currentId = loadingId++
  }

  static defaultProps: LgLoadingBProps = {
    tip: "加载中...",
    showIcon: false,
    animeType: "A"
  }

  getRightId() {
    return `lg-loading-b-right-${this.currentId}`
  }

  getLeftId() {
    return `lg-loading-b-left-${this.currentId}`
  }

  render() {
    return (
      <div className={`lg-loading-b-root`}>
        {
          !this.props.showIcon || this.props.animeType !== "A" ? "" :
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px"
                 height="30px" viewBox="0 0 200 200" className="lg-loading-b-circle-anime">
              <g>
                <linearGradient id={this.getLeftId()} gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180">
                  <stop offset="0" className="left-start-color-0"/>
                  <stop offset="1" className="left-start-color-1"/>
                </linearGradient>
                <linearGradient id={this.getRightId()} gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="50" y2="180">
                  <stop offset="0" className="right-start-color-0"/>
                  <stop offset="1" className="right-start-color-1"/>
                </linearGradient>
                <path style={{fill: `url(#${this.getLeftId()})`}}
                      d="M20,100c0-44.1,35.9-80,80-80V0C44.8,0,0,44.8,0,100s44.8,100,100,100v-20C55.9,180,20,144.1,20,100z"/>
                <path style={{fill: `url(#${this.getRightId()})`}}
                      d="M100,0v20c44.1,0,80,35.9,80,80c0,44.1-35.9,80-80,80v20c55.2,0,100-44.8,100-100S155.2,0,100,0z"/>
                <circle className="top" cx="100" cy="10" r="10"/>
              </g>
            </svg>
        }
        {
          !this.props.showIcon || this.props.animeType !== "B" ? "" :
            <div className="lg-loading-anime-b-wrapper" style={{width: "30px", height: "30px"}}>
              <svg viewBox="25 25 50 50" className="circular">
                <circle cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10"
                        className="lg-loading-anime-b"/>
              </svg>
            </div>
        }
        {
          !this.props.tip ? "" :
            <div className="lg-loading-tip">{this.props.tip}</div>
        }
      </div>
    )
  }
}


