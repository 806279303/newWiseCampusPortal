import { Component } from "react";
import "./index.scss";
import ReactEcharts from 'echarts-for-react'
import { EChartsReactProps} from "echarts-for-react";

export class LgCharts extends Component<EChartsReactProps, {}>{
    render() {
        return (
            <ReactEcharts {...this.props}/>
        )
    }
}