import {Component} from "react";
import {allSkinClassName} from "@/components/index";
import {BaseProps} from "../../type/BaseProps";

export interface AllSkinCoverProps extends BaseProps{

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