import { Component } from "react";
import "./index.scss";
import ReactEcharts from 'echarts-for-react'
import { EChartsReactProps, EChartsOption, EChartsInstance } from "echarts-for-react";
import * as echarts from 'echarts';

export const LgChartsClass = echarts;


export class LgCharts extends Component<EChartsReactProps, {}>{
    
    static readonly LgChartsClass = echarts

    constructor(props: EChartsReactProps) {
        super(props)
    }
    render() {
        return (
            <ReactEcharts {...this.props}/>
        )
    }
}