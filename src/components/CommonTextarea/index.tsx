import "./index.scss"
import {BaseComponent} from "../../type/BaseComponent";
import React from "react";

export interface CommonTextareaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
}

export class CommonTextarea extends BaseComponent<CommonTextareaProps> {

  render() {
    const {className, ...props} = this.props
    return (
      <textarea {...props} className={this.rootClass()}/>
    )
  }

  getClassNamePrefix(): string {
    return "CommonTextarea";
  }
}

