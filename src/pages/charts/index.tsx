import { Component } from "react";
import "./index.scss";
import { LgCharts } from "@/components/charts";
import { CodeView } from "@/components/CodeView";
import * as echarts from 'echarts';

export default class Charts extends Component<{}, {}>{
    getChartOptions1() {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [
                        120,
                        {
                            value: 200,
                            itemStyle: {
                                color: '#a90000'
                            }
                        },
                        150,
                        80,
                        70,
                        110,
                        130
                    ],
                    type: 'bar'
                }
            ]
        }
    }
    getChartOptions2() {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };
    }
    getChartOptions3() {
        let base = +new Date(2016, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let valueBase = Math.random() * 300;
        let valueBase2 = Math.random() * 50;
        let data = [];
        let data2 = [];

        for (var i = 1; i < 10; i++) {
            var now = new Date((base += oneDay));
            var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

            valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
            valueBase <= 0 && (valueBase = Math.random() * 300);
            data.push([dayStr, valueBase]);

            valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
            valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
            data2.push([dayStr, valueBase2]);
        }

        return {
            title: {
                left: 'center',
                text: 'Tootip and dataZoom on Mobile Device'
            },
            legend: {
                top: 'bottom',
                data: ['Intention']
            },
            tooltip: {
                triggerOn: 'none',
                position: function (pt: any) {
                    return [pt[0], 130];
                }
            },
            toolbox: {
                left: 'center',
                itemSize: 25,
                top: 55,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {}
                }
            },
            xAxis: {
                type: 'time',
                axisPointer: {
                    value: '2016-10-7',
                    snap: true,
                    lineStyle: {
                        color: '#7581BD',
                        width: 2
                    },
                    label: {
                        show: true,
                        formatter: function (params: any) {
                            return echarts.format.formatTime('yyyy-MM-dd', params.value);
                        },
                        backgroundColor: '#7581BD'
                    },
                    handle: {
                        show: true,
                        color: '#7581BD'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    inside: true
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    inside: true,
                    formatter: '{value}\n'
                },
                z: 10
            },
            grid: {
                top: 110,
                left: 15,
                right: 15,
                height: 160
            },
            dataZoom: [
                {
                    type: 'inside',
                    throttle: 50
                }
            ],
            series: [
                {
                    name: 'Fake Data',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    sampling: 'average',
                    itemStyle: {
                        color: '#0770FF'
                    },
                    stack: 'a',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(58,77,233,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(58,77,233,0.3)'
                            }
                        ])
                    },
                    data: data
                },
                {
                    name: 'Fake Data',
                    type: 'line',
                    smooth: true,
                    stack: 'a',
                    symbol: 'circle',
                    symbolSize: 5,
                    sampling: 'average',
                    itemStyle: {
                        color: '#F2597F'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(213,72,120,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(213,72,120,0.3)'
                            }
                        ])
                    },
                    data: data2
                }
            ]
        }
    }
    getChartOptions4() {
        return {
            title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };;
    }
    getChartOptions5() {
        return {
            angleAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            radiusAxis: {},
            polar: {},
            series: [
                {
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [2, 4, 6, 1, 3, 2, 1],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        }
    }
    getChartOptions6() {
        return {
            title: {
                text: 'Basic Radar Chart'
            },
            legend: {
                data: ['Allocated Budget', 'Actual Spending']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: 'Sales', max: 6500 },
                    { name: 'Administration', max: 16000 },
                    { name: 'Information Technology', max: 30000 },
                    { name: 'Customer Support', max: 38000 },
                    { name: 'Development', max: 52000 },
                    { name: 'Marketing', max: 25000 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            value: [4200, 3000, 20000, 35000, 50000, 18000],
                            name: 'Allocated Budget'
                        },
                        {
                            value: [5000, 14000, 28000, 26000, 42000, 21000],
                            name: 'Actual Spending'
                        }
                    ]
                }
            ]
        }
    }
    getChartOptions7() {
        return {
            xAxis: {},
            yAxis: {},
            series: [
                {
                    symbolSize: 20,
                    data: [
                        [10.0, 8.04],
                        [8.07, 6.95],
                        [13.0, 7.58],
                        [9.05, 8.81],
                        [11.0, 8.33],
                        [14.0, 7.66],
                        [13.4, 6.81],
                        [10.0, 6.33],
                        [14.0, 8.96],
                        [12.5, 6.82],
                        [9.15, 7.2],
                        [11.5, 7.2],
                        [3.03, 4.23],
                        [12.2, 7.83],
                        [2.02, 4.47],
                        [1.05, 3.33],
                        [4.05, 4.96],
                        [6.03, 7.24],
                        [12.0, 6.26],
                        [12.0, 8.84],
                        [7.08, 5.82],
                        [5.02, 5.68]
                    ],
                    type: 'scatter'
                }
            ]
        }
    }
    render() {
        return (
            <div className="lg_charts_container">
                <h2>Charts图表</h2>
                <div className="lg_tabs_item">
                <div className="lg_tabs_item_title">标签属性</div>
                <CodeView language="html" className="lg_tabs_block">
                    {`
                        /* 具体参照echarts官方文档：https://echarts.apache.org/zh/api.html#echarts  */
                        import { EChartsReactProps } from "echarts-for-react";
                    `}
                </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">平面柱状图</div>
                    <LgCharts
                        option={this.getChartOptions1()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
{`
    /* 平面柱状图 */
    const options1 = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [
                    120,
                    {
                        value: 200,
                        itemStyle: {
                            color: '#a90000'
                        }
                    },
                    150,
                    80,
                    70,
                    110,
                    130
                ],
                type: 'bar'
            }
        ]
    }
    <LgCharts
        option={this.getChartOptions1()}      // option：图表配置项
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '300px' }}
    />
`}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">直角曲线图</div>
                    <LgCharts
                        option={this.getChartOptions2()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
                    {`
                        /* 直角曲线图 */
                        const options2 = {
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    data: [150, 230, 224, 218, 135, 147, 260],
                                    type: 'line'
                                }
                            ]
                        };
                        <LgCharts
                            option={this.getChartOptions2()}      // option：图表配置项
                            notMerge={true}
                            lazyUpdate={true}
                            style={{ height: '300px' }}
                        />
                    `}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">圆弧曲线图</div>
                    <LgCharts
                        option={this.getChartOptions3()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '400px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
                    {`
                        /* 圆弧曲线图 */
                        let base = +new Date(2016, 9, 3);
                        let oneDay = 24 * 3600 * 1000;
                        let valueBase = Math.random() * 300;
                        let valueBase2 = Math.random() * 50;
                        let data = [];
                        let data2 = [];

                        for (var i = 1; i < 10; i++) {
                            var now = new Date((base += oneDay));
                            var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

                            valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
                            valueBase <= 0 && (valueBase = Math.random() * 300);
                            data.push([dayStr, valueBase]);

                            valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
                            valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
                            data2.push([dayStr, valueBase2]);
                        };
                        
                        const options3 = {
                            title: {
                                left: 'center',
                                text: 'Tootip and dataZoom on Mobile Device'
                            },
                            legend: {
                                top: 'bottom',
                                data: ['Intention']
                            },
                            tooltip: {
                                triggerOn: 'none',
                                position: function (pt: any) {
                                    return [pt[0], 130];
                                }
                            },
                            toolbox: {
                                left: 'center',
                                itemSize: 25,
                                top: 55,
                                feature: {
                                    dataZoom: {
                                        yAxisIndex: 'none'
                                    },
                                    restore: {}
                                }
                            },
                            xAxis: {
                                type: 'time',
                                axisPointer: {
                                    value: '2016-10-7',
                                    snap: true,
                                    lineStyle: {
                                        color: '#7581BD',
                                        width: 2
                                    },
                                    label: {
                                        show: true,
                                        formatter: function (params: any) {
                                            return echarts.format.formatTime('yyyy-MM-dd', params.value);
                                        },
                                        backgroundColor: '#7581BD'
                                    },
                                    handle: {
                                        show: true,
                                        color: '#7581BD'
                                    }
                                },
                                splitLine: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'value',
                                axisTick: {
                                    inside: true
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLabel: {
                                    inside: true,
                                    formatter: '{value}\\n'
                                },
                                z: 10
                            },
                            grid: {
                                top: 110,
                                left: 15,
                                right: 15,
                                height: 160
                            },
                            dataZoom: [
                                {
                                    type: 'inside',
                                    throttle: 50
                                }
                            ],
                            series: [
                                {
                                    name: 'Fake Data',
                                    type: 'line',
                                    smooth: true,
                                    symbol: 'circle',
                                    symbolSize: 5,
                                    sampling: 'average',
                                    itemStyle: {
                                        color: '#0770FF'
                                    },
                                    stack: 'a',
                                    areaStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgba(58,77,233,0.8)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(58,77,233,0.3)'
                                            }
                                        ])
                                    },
                                    data: data
                                },
                                {
                                    name: 'Fake Data',
                                    type: 'line',
                                    smooth: true,
                                    stack: 'a',
                                    symbol: 'circle',
                                    symbolSize: 5,
                                    sampling: 'average',
                                    itemStyle: {
                                        color: '#F2597F'
                                    },
                                    areaStyle: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: 'rgba(213,72,120,0.8)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(213,72,120,0.3)'
                                            }
                                        ])
                                    },
                                    data: data2
                                }
                            ]
                        };
                        <LgCharts
                            option={this.getChartOptions3()}      // option：图表配置项
                            notMerge={true}
                            lazyUpdate={true}
                            style={{ height: '400px' }}
                        />
                    `}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">饼状图</div>
                    <LgCharts
                        option={this.getChartOptions4()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
{`
    /* 饼状图 */
    const options4 = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    <LgCharts
        option={this.getChartOptions4()}      // option：图表配置项
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '300px' }}
    />
`}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">玫瑰图</div>
                    <LgCharts
                        option={this.getChartOptions5()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
{`
    /* 玫瑰图 */
    const options5 = {
        angleAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        radiusAxis: {},
        polar: {},
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            },
            {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }
        ],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    }
    <LgCharts
        option={this.getChartOptions5()}      // option：图表配置项
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '300px' }}
    />
`}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">雷达图</div>
                    <LgCharts
                        option={this.getChartOptions6()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
{`
    /* 雷达图 */
    const options6 = {
        title: {
            text: 'Basic Radar Chart'
        },
        legend: {
            data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget'
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending'
                    }
                ]
            }
        ]
    }
    <LgCharts
        option={this.getChartOptions6()}      // option：图表配置项
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '300px' }}
    />
`}
                    </CodeView>
                </div>
                <div className="lg_charts_item">
                    <div className="lg_charts_item_title">散点图</div>
                    <LgCharts
                        option={this.getChartOptions7()}      // option：图表配置项
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '300px' }}
                    />
                    <CodeView language="html" className="lg_tabs_block">
{`
    /* 散点图 */
    const options7 = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
            }
        ]
    }
    <LgCharts
        option={this.getChartOptions7()}      // option：图表配置项
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '300px' }}
    />
`}
                    </CodeView>
                </div>
            </div>
        )
    }
}