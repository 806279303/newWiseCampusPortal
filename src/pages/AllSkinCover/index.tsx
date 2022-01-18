import { Component, cloneElement } from "react";
import { allSkinClassName } from "@/components/index";
import { BaseProps } from "../../type/BaseProps";

export interface AllSkinCoverProps extends BaseProps {

}

export class AllSkinCover extends Component<AllSkinCoverProps, {}>{
  render() {
    return (
      <>
        {
          allSkinClassName.map((className, index) =>
            <div key={index} className={`${className} ${this.props.className || ''}`} style={this.props.style}>
              {/* {this.props.children && cloneElement(this.props.children as any, {
                className
              })} */}
              {this.props.children}
            </div>
          )
        }
      </>
    )
  }
}