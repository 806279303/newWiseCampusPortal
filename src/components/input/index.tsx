/*
 * @Author       : super-J
 * @Date         : 2022-02-09 16:52:27
 * @LastEditTime : 2022-02-17 14:06:36
 * @LastEditors  : super-J
 * @Description  : 输入框/下拉框
 */

import { Input } from 'element-react';
import React, { Component } from 'react'
import classNames from "classnames";
import "./index.scss";
let createNum = 0;
interface InputProps {
    style?: React.CSSProperties
    className?: string;
    parentClassName?: string;

    type?: string // valid value are 'text' & 'textarea'
    icon?: string | React.ReactElement<any>
    disabled?: boolean
    name?: string
    placeholder?: string
    readOnly?: boolean
    autoFocus?: boolean
    maxLength?: number
    minLength?: number
    defaultValue?: any
    value?: any

    // type !== 'textarea'
    size?: 'large' | 'small' | 'mini'
    prepend?: any
    append?: any

    // type === 'textarea'
    autosize?: boolean | Object
    rows?: number

    // event
    onFocus?(e?: React.SyntheticEvent<HTMLInputElement>): void
    onBlur?(e?: React.SyntheticEvent<HTMLInputElement>): void
    onChange?(e?: React.SyntheticEvent<HTMLInputElement>): void
    onIconClick?(): void
    onMouseEnter?(e?: React.SyntheticEvent<HTMLDivElement>): void
    onMouseLeave?(e?: React.SyntheticEvent<HTMLDivElement>): void

    // autoComplete
    autoComplete?: string
    inputSelect?(item?: any): void

    // form related
    form?: string
    validating?: boolean

    max?: string | number
    min?: string | number
    step?: string | number
    resize?: 'none' | 'both' | 'horizontal' | 'vertical'

    // lgInput
    isShowCount?: boolean; //是否显示统计字数
}
interface InputState {
    entryNum: number
}
export class LgInput extends Component<InputProps, InputState> {
    constructor(props: InputProps | Readonly<InputProps>) {
        super(props);
        this.createNum = ++createNum;
        this.state = {
            entryNum: 0
        }
        this.onChange = this.onChange.bind(this)

    }
    createNum = 0;
    static defaultProps = {
        parentClassName: "",
    }
    componentDidMount() {
        // setTimeout(() => {
        //     let textNumberBox = document.getElementById('lg_input_text_num' + this.createNum);
        // }, 10);
    }
    componentDidUpdate() {
        // setTimeout(() => {
        //     let textNumberBox = document.getElementById('lg_input_text_num' + this.createNum);
        // }, 10);

    }
    /**
     * @description  : 统计字数用的
     * @param         { type any }  e
     * @return        { type * } 
     */
    onChange(e: any) {
        this.setState({ entryNum: e.length })
        this.props.onChange && this.props.onChange(e);
    }
    render() {
        const { props, state } = this;

        let inputType = props.type == "textarea" ? " lg_input_textarea " : " lg_input_text ";
        let boxClassName = classNames(
            'lg_input_box',
            {
                'lg_input_textarea_box': props.type === "textarea",
                'lg_input_text_box': props.type !== "textarea"
            },
            {
                'lg_input_text_box_show_num': props.isShowCount && props.type !== "textarea" && (props.maxLength || 0) > 0
            },
            props.parentClassName);
        let numClassName = classNames(
            'lg_input_text_num',
            {
                'lg_input_textarea': props.type === "textarea",
                'lg_input_text': props.type !== "textarea"
            });
        return (
            <div id={'lg_input_box' + this.createNum} className={boxClassName} >
                <Input {...props} onChange={this.onChange} />
                <div
                    id={'lg_input_text_num' + this.createNum}
                    className={numClassName}
                    style={{ display: props.isShowCount && (props?.maxLength || 0) > 0 ? 'block' : 'none' }}
                >
                    {state.entryNum}/{props.maxLength}
                </div>
            </div>
        )
    }
}

