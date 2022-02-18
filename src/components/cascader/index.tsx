/*
 * @Author       : super-J
 * @Date         : 2022-02-09 16:52:27
 * @LastEditTime : 2022-02-18 13:48:48
 * @LastEditors  : super-J
 * @Description  : 输入框/下拉框
 */

import { create } from 'domain';
import { Cascader, Input } from 'element-react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import classNames from "classnames";
import "./index.scss";
let createNum = 0;
interface CascaderProps {
    options: any[]
    props?: {
        value?: string
        label?: string
        children?: string
        disabled?: string
    }
    value?: any[]
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    changeOnSelect?: boolean
    popperClass?: string
    expandTrigger?: 'click' | 'hover'
    filterable?: boolean
    size?: 'large' | 'small' | 'mini'
    showAllLevels?: boolean
    debounce?: number
    activeItemChange?(param?: any[]): void
    onChange?(value?: any): void;
    
    style?: React.CSSProperties
    className?: string;

}
interface CascaderState { }

export class LgCascader extends Component<CascaderProps, CascaderState> {
    constructor(props: CascaderProps | Readonly<CascaderProps>) {
        super(props);
    }

    handleChange(key: any, value: any) {
        // this.setState({ [key]: value });

        console.log(value);
    }

    render() {
        const { props, state } = this;
        return (
            <div className='lg_cascader_box'>
                <Cascader {...props} />
            </div>
        )
    }

}

