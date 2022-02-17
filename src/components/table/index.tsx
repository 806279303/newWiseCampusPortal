/*
 * @Author       : super-J
 * @Date         : 2022-02-09 16:52:27
 * @LastEditTime : 2022-02-14 14:54:38
 * @LastEditors  : super-J
 * @Description  : 输入框/下拉框
 */

import React, { Component, SyntheticEvent } from 'react'
import classNames from "classnames";
import "./index.scss";
import { Table } from 'element-react';
interface TableColumn {
    label?: string
    prop?: string
    property?: string
    type?: string
    minWidth?: number
    width?: number
    align?: string
    sortable?: boolean
    sortMethod?: () => void
    resizable?: boolean
    formatter?: () => void
    selectable?: boolean
    fixed?: boolean | string
    filterMethod?: () => void
    filters?: Object[]
    render?: (data?: Object, column?: Object, index?: number) => void
}


interface LgTableProps {
    className?: string
    style?: React.CSSProperties

    maxHeight?: number
    columns?: TableColumn[]
    data?: any[]
    height?: number
    stripe?: boolean
    border?: boolean
    fit?: boolean
    showHeader?: boolean
    rowClassName?(row?: any, index?: any): void
    highlightCurrentRow?: boolean
    onCurrentChange?(item?: any): void
    onSelectAll?(): void
    onSelectChange?(): void
    currentRowKey?: any
    showSummary?: boolean
    sumText?: string
    summaryMethod?: any

    onRowClick?(row?: any, event?: SyntheticEvent, column?: any): void
}
interface LgTableState {
}
export class LgTable extends Component<LgTableProps, LgTableState> {
    constructor(props: LgTableProps | Readonly<LgTableProps>) {
        super(props);
    }

    render() {
        // @ts-ignore
        const { props, state } = this;

        let boxClassName = classNames('lg_table_box');

        return (
            <div className={boxClassName} >
                <Table {...props} />
            </div>
        )
    }
}

