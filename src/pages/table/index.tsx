/*
* @Author       : super-J
* @Date         : 2022-02-09 17:22:40
 * @LastEditTime : 2022-02-22 19:21:28
 * @LastEditors  : super-J
* @Description  : 
*/
import { LgBreadcrumb } from "@/components/breadcrumb";
import { LgCascader } from "@/components/cascader";
import { CodeView } from "@/components/CodeView";
import { DemoView } from "@/components/demoView";
import { LgInput } from "@/components/input";
import { LgTable } from "@/components/table";
import { Button, Cascader, Icon, Input, Select, Tag } from "element-react";
import { Component } from "react";
import { DemoPage } from "../demoPage";
import "./index.scss";
interface TableDemoState {
    columns: any, data: any
    columns1: any, data1: any
    columns2: any, data2: any
    columns3: any, data3: any
    columns4: any, data4: any
    columns5: any, data5: any
    columns6: any, data6: any
}
export default class TableDemo extends Component<{}, TableDemoState> {
    constructor(props: any) {
        super(props)
        this.state = {
            columns1: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data1: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 150,
                    fixed: 'left'
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 160
                },
                {
                    label: "省份",
                    prop: "province",
                    width: 160
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 400
                },
                {
                    label: "邮编",
                    prop: "zip",
                    width: 120
                },
                {
                    label: "操作",
                    prop: "zip",
                    fixed: 'right',
                    width: 100,
                    render: () => {
                        return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
                    }
                }
            ],
            data: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            columns2: [
                {
                    label: "日期",
                    prop: "date",
                    width: 150,
                    fixed: 'left',
                    align: 'center'
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 160,
                    align: 'right'
                },
                {
                    label: "省份",
                    prop: "province",
                    width: 160
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 400
                },
                {
                    label: "邮编",
                    prop: "zip",
                    width: 120
                }
            ],
            data2: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            columns3: [
                {
                    label: "日期",
                    prop: "date",
                    width: 150,
                    fixed: 'left',
                    align: 'center'
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 160,
                    align: 'right'
                },
                {
                    label: "省份",
                    prop: "province",
                    width: 160
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 400
                },
                {
                    label: "邮编",
                    prop: "zip",
                    width: 120
                },
                {
                    label: "操作",
                    width: 120,
                    fixed: 'right',
                    render: (row: any, column: any, index: any) => {
                        return <span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>
                    }
                }
            ],
            data3: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            columns4: [
                {
                    label: "日期",
                    prop: "date",
                    width: 150
                },
                {
                    label: "配送信息",
                    subColumns: [
                        {
                            label: "姓名",
                            prop: "name",
                            width: 160
                        },
                        {
                            label: "地址",
                            subColumns: [
                                {
                                    label: "省份",
                                    prop: "province",
                                    width: 160
                                },
                                {
                                    label: "城市",
                                    prop: "address",
                                    width: 400
                                },
                                {
                                    label: "邮编",
                                    prop: "zip",
                                    width: 120
                                }
                            ]
                        }
                    ]
                }
            ],
            data4: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            columns5: [
                {
                    type: 'index'
                },
                {
                    label: "日期",
                    prop: "date",
                    width: 150,
                    render: function (data: any) {
                        return (
                            <span>
                                <Icon name="time" />
                                <span style={{ marginLeft: '10px' }}>{data.date}</span>
                            </span>)
                    }
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 160,
                    render: function (data: any) {
                        return <Tag>{data.name}</Tag>
                    }
                },
                {
                    label: "操作",
                    prop: "address",
                    render: function () {
                        return (
                            <span>
                                <Button plain={true} type="info" size="small">编辑</Button>
                                <Button type="danger" size="small">删除</Button>
                            </span>
                        )
                    }
                }
            ],
            data5: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
            columns6: [
                {
                    label: "ID",
                    prop: "id",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "数值 1",
                    prop: "amount1"
                },
                {
                    label: "数值 2",
                    prop: "amount2"
                },
                {
                    label: "数值 3",
                    prop: "amount3"
                }
            ],
            data6: [{
                id: '12987122',
                name: '王小虎',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '王小虎',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '王小虎',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '王小虎',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }, {
                id: '12987126',
                name: '王小虎',
                amount1: '539',
                amount2: '4.1',
                amount3: 15
            }]
        }

    }
    componentDidMount() {
        // let allSkin = ["lg-skin-s1", "lg-skin-s2", "lg-skin-s3", "lg-skin-s4", "lg-skin-s5", "lg-skin-k1", "lg-skin-k2"];
        // let number = allSkin.length;
        // setInterval(() => {
        //     let index = Math.floor(Math.random() * parseInt(number as any));
        //     document.documentElement.className = allSkin[index];
        // }, 1000 * 5)
    }
    onRowClick() {
        console.log(arguments)
    }
    rowClassName(row: any, index: any) {
        if (index === 1) {
            return 'info-row';
        } else if (index === 3) {
            return 'positive-row';
        }

        return '';
    }
    deleteRow(index: any) {
        const { data } = this.state;
        data.splice(index, 1);
        this.setState({
            data3: [...data]
        })
    }
    render() {
        return (

            <div className="table_container">
                <DemoPage title="G017 列表/表格" subtitle="" className="lg-breadcrumb-demo-page"
                    importCode={`import { LgTable } from "@/components/table";`}
                    interfaceCode={`
                    interface lgAlert {
                        // 参数请参考: @see https://elemefe.github.io/element-react/#/zh-CN/table
                    }`
                    }>
                    <DemoView title="基础表格" code={`
this.state = {
    data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }],
    columns: [
        {
            label: "日期",
            prop: "date",
            width: 180
        },
        {
            label: "姓名",
            prop: "name",
            width: 180
        },
        {
            label: "地址",
            prop: "address"
        }
    ],
}
<LgTable
    style={{ width: '900px' }}
    columns={this.state.columns}
    data={this.state.data}
/>
                    `}>
                        <LgTable
                            style={{ width: '900px' }}
                            columns={this.state.columns1}
                            data={this.state.data1}
                        />
                    </DemoView>

                    <DemoView title="自定义列模板" code={`
this.state = {
    columns5: [
        {
            type: 'index'
        },
        {
            label: "日期",
            prop: "date",
            width: 150,
            render: function (data: any) {
                return (
                    <span>
                        <Icon name="time" />
                        <span style={{ marginLeft: '10px' }}>{data.date}</span>
                    </span>)
            }
        },
        {
            label: "姓名",
            prop: "name",
            width: 160,
            render: function (data: any) {
                return <Tag>{data.name}</Tag>
            }
        },
        {
            label: "操作",
            prop: "address",
            render: function () {
                return (
                    <span>
                        <Button plain={true} type="info" size="small">编辑</Button>
                        <Button type="danger" size="small">删除</Button>
                    </span>
                )
            }
        }
    ],
    data5: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
    }],
}

<LgTable
    columns={this.state.columns5}
    data={this.state.data5}
    style={{ width: '900px' }}
    highlightCurrentRow={true}
    onCurrentChange={(item: any) => { console.log(item) }}
/>
                    `}>
                        <LgTable

                            columns={this.state.columns5}
                            data={this.state.data5}
                            style={{ width: '900px' }}
                            highlightCurrentRow={true}
                            onCurrentChange={(item: any) => { console.log(item) }}
                        />
                    </DemoView>
                </DemoPage>



                {/* <div className='components-show-box'>
                    <div className='components-show-big-title'>G017 列表/表格</div>
                    <div className='components-show-use'>使用指南</div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>一、在 @/components/table 文件中引入组件 LgTable</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `import { LgTable } from "@/components/table";`
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>二、再引入标签，标签属性解析</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `
interface lgAlert {
// 参数请参考: @see https://elemefe.github.io/element-react/#/zh-CN/table
}
`
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>三、demo样式展示</div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>基础表格</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns1}
                                    data={this.state.data1}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
maxHeight={200}
data={this.state.data1}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>自定义列模板</div>
                            <div>
                                <LgTable

                                    columns={this.state.columns5}
                                    data={this.state.data5}
                                    style={{ width: '900px' }}
                                    highlightCurrentRow={true}
                                    onCurrentChange={(item: any) => { console.log(item) }}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
                                    <LgTable
                                    style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div> */}
                {/* <div className='components-show-example'>
                            <div className='components-show-example-title'>带斑马纹表格</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns1}
                                    data={this.state.data1}
                                    stripe={true}
                                />

                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
stripe={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>

                        <div className='components-show-example'>
                            <div className='components-show-example-title'>带边框表格</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns1}
                                    data={this.state.data1}
                                    border={true}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div> */}
                {/* <div className='components-show-example'>
                            <div className='components-show-example-title'>带状态表格</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns1}
                                    data={this.state.data1}
                                    stripe
                                    rowClassName={this.rowClassName.bind(this)}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>

                        <div className='components-show-example'>
                            <div className='components-show-example-title'>固定表头</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    border={true}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>

                        <div className='components-show-example'>
                            <div className='components-show-example-title'>固定列和表头</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns2}
                                    data={this.state.data2}
                                    border={true}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>流体高度</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns3}
                                    data={this.state.data3}
                                    border={true}
                                    maxHeight={250}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div> */}

                {/* <div className='components-show-example'>
                            <div className='components-show-example-title'>多级表头</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    columns={this.state.columns4}
                                    data={this.state.data4}
                                    border={true}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
columns={this.state.columns1}
data={this.state.data1}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div> */}
                {/* <div className='components-show-example'>
                            <div className='components-show-example-title'>自定义列模板</div>
                            <div>
                                <LgTable
                                    style={{ width: '900px' }}
                                    showSummary={true}
                                    columns={this.state.columns}
                                    data={this.state.data}
                                />
                                <LgTable
                                    style={{ width: '900px', marginTop: 20 }}
                                    showSummary={true}
                                    columns={this.state.columns}
                                    data={this.state.data}
                                    sumText='总价'
                                    summaryMethod={(columns: any, data: any) => {
                                        const dataList = [];
                                        for (var i = 0; i < columns.length; i++) {
                                            let total: number | string = 0;
                                            for (let j = 0; j < data.length; j++) {
                                                let value = data[j][columns[i]['property']];

                                                if (isNaN(value)) {
                                                    total = 'N/A'
                                                    break;
                                                } else {
                                                    total += parseFloat(value);
                                                }
                                            }
                                            dataList[i] = isNaN(total as number) ? total : total + '元';
                                        }
                                        return dataList;
                                    }}
                                    border={true}
                                />
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgTable
style={{ width: '900px' }}
showSummary={true}
columns={this.state.columns}
data={this.state.data}
/>
<LgTable
style={{ width: '900px', marginTop: 20 }}
showSummary={true}
columns={this.state.columns}
data={this.state.data}
sumText='总价'
summaryMethod={(columns: any, data: any) => {
const dataList = [];
for (var i = 0; i < columns.length; i++) {
let total: number | string = 0;
for (let j = 0; j < data.length; j++) {
let value = data[j][columns[i]['property']];

if (isNaN(value)) {
total = 'N/A'
break;
} else {
total += parseFloat(value);
}
}
dataList[i] = isNaN(total as number) ? total : total + '元';
}
return dataList;
}}
border={true}
/>
`
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div> */}

                {/* 
                    </div>
                </div> */}
            </div>
        )
    }
}

