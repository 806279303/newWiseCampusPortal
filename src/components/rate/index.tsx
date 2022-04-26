import "./index.scss"
import { Component } from "react";
import { BaseProps } from '../../type/BaseProps';

import { Rate } from "element-react";
import { BaseComponent } from "../../type/BaseComponent";

interface RateProps {
    colors?: string[]
    texts?: string[]
    showText?: boolean
    textColor?: string
    disabled?: boolean
    value?: number
    onChange?(value?: number): void
    textTemplate?: string
    lowThreshold?: number
    highThreshold?: number
    max?: number
    voidColor?: string
    disabledVoidColor?: string
    iconClasses?: string[]
    voidIconClass?: string
    disabledVoidIconClass?: string
    allowHalf?: boolean
}
export class LgRate extends BaseComponent<RateProps> {


    constructor(props: RateProps, context: any) {
        super(props, context)
    }

    onSelect() {
    }
    onOpen() {

    }
    onClose() {

    }

    componentDidMount(): void {
        super.componentDidMount()
    }
    render() {
        const { className = '', style } = this.props
        return (
            <div className={`lg_rate_root ${className}`} style={style}>
                <Rate {...this.props}>
                    {
                        this.props.children
                    }
                </Rate>
            </div>
        )
    }

    getClassNamePrefix(): string {
      return "LgRate";
    }
}