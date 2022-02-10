import { Children, Component, ReactNode } from "react";
import "./index.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import { Card,Button } from 'element-react';
import {BaseComponent} from "../../type/BaseComponent"
import { BaseProps } from "../../type/BaseProps";
import classNames from "classnames";

export interface LgCardProps extends BaseProps {
    headerContent?: string | React.ReactElement<any>
    bodyStyle?: React.CSSProperties
    width?: number
    shadow?: "always" | "hover" | "never"

}

export const LgCard = (props: LgCardProps) => {
    return <LgBaseCard {...props} />
}

export class LgBaseCard extends BaseComponent<LgCardProps> {
    render() {
        let width = this.props.width || 480
        let shadow = this.props.shadow || "always"
        let className = classNames(
            "box-card",
            `shadow-${shadow}`,
            {
                [`${this.props.className}`]: !!this.props.className
            }
        )
           
        return (
            <Card
              className={className}
              bodyStyle={this.props.bodyStyle}
              style={{width}}
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
  }