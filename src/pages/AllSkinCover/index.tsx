import {Component, CSSProperties} from "react";
import {allSkinClassName} from "@/components/index";

export class AllSkinCoverProps{
  className?: string
  style?: CSSProperties
}

export class AllSkinCover extends Component<AllSkinCoverProps, {}>{
  render() {
    return(
      <>
        {
          allSkinClassName.map(className =>
            <div className={`${className} ${this.props.className || ''}`} style={this.props.style}>
              {
                this.props.children
              }
            </div>
          )
        }
      </>
    )
  }
}