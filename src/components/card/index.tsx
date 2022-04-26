import "./index.scss";
import React from 'react';
import {Card} from 'element-react';
import {BaseComponent} from "../../type/BaseComponent"
import {BaseProps} from "../../type/BaseProps";
import classNames from "classnames";

export interface LgCardProps extends BaseProps {
  headerContent?: string | React.ReactElement<any>
  bodyStyle?: React.CSSProperties
  shadow?: "always" | "hover" | "never"

}

export const LgCard = (props: LgCardProps) => {
  return <LgBaseCard {...props} />
}

export class LgBaseCard extends BaseComponent<LgCardProps> {
  render() {
    const {className = '', style} = this.props
    let shadow = this.props.shadow || "always"
    let cardClassName = classNames(
      "box-card",
      `shadow-${shadow}`,
      className,
      {
        [`${this.props.className}`]: !!this.props.className
      }
    )

    return (
      <Card
        className={cardClassName}
        bodyStyle={this.props.bodyStyle}
        style={style}
        header={
          this.props.headerContent
        }
      >
        {
          this.props.children
        }
      </Card>
    )
  }

  getClassNamePrefix(): string {
    return "LgBaseCard";
  }
}