import { Component } from "react";
import "./index.scss";
import ReactEcharts from 'echarts-for-react'
import { EChartsReactProps, EChartsOption, EChartsInstance } from "echarts-for-react";

export class LgCharts extends Component<EChartsReactProps, {}>{
    constructor(props: EChartsReactProps) {
        super(props)
    }
    render() {
        return (
            <ReactEcharts {...this.props}/>
        )
    }
}